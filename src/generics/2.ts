type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type PickedType<T> = Pick<T, "name" | "color" | "position" | "weight">;

function compare<T extends AllType>(
  top: PickedType<T>,
  bottom: PickedType<T>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
