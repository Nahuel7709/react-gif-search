import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && (<h2 className="loading">Cargando...</h2>)}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem 
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  );
}
