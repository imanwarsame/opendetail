
## Detail 
A detail describes the way two or more building ELEMENTS are connected together. 
If more than two elements are present in a detail, two of can be defined as "main element".
One detail is aiming to resolve a single interface : a window has nothing to do in a wall/slab detail

## Detail Origin
Detail origin is out of scope of the current MVP. Detail origin is implicitely at the intersection betwen the two main elements axis. 

## Assembly
The assembly represents all the parts composing a Detail : buildup parts from elements and detail parts.

## Element 
An element is a building component : a wall, a slab, a column. We mostly lean on IFC entities definition.
The layering of an element is defined in its buildup, composed of buildup parts.

Linear Elements have an axis, planar elements have a surface that is out of scope from the current MVP.

## Buildup part 
A buildup part represent a layer of the element buildup. Buildup parts have an index representing this part's position in the entire buildup. If two parts have the same index, they are located in the same layer (think timber studs and insulation on a timber wall). 
Buildup parts are defined by their thicknesses. This works great for planar elements (walls, slabs...) but "Linear" elements (beams, columns) don't really work with this definition because they would need to be defined their parts in 2 dimensions rather than one.

## Detail Part 
A detail part is a part that is added to the detail to ensure proper connection between the element's buildup. Tape, seal, sill stud are good example of detail parts. 


## Fasteners
Fasteners are out of scope of the current MVP. Fasteners describes screw, tape, steel brackets, etc.

## Buildup part Cut-Back
Cutbacks are out of scope of the current MVP. Cutback defines how much the buildup part is cut back from the detail origin

