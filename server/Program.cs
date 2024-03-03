using OpenDetailAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region Add database

builder.Services.AddScoped<DBService>();

#endregion

#region Add services

builder.Services.AddScoped(provider =>
{
    DBService dbService = provider.GetRequiredService<DBService>();
    return new DetailsService(dbService.GetDatabase());
});

#endregion

WebApplication app = builder.Build();

//Enables CORS to allow requests to be made from another domain (a.k.a. the front end)
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
