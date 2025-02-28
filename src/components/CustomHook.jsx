import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';


export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=single&limit=10`);

    if (isLoading) return <Loading />;
    if (hasError) return <p>Error al cargar los datos</p>;

    const album = data?.items[counter];

    return (
        <>
        <h1>Spotify Albums</h1>
        <hr/>
        <h2>{album?.name}</h2>
        {album ? (
            <Card
                id={counter + 1}
                name={album.name}
                sprites={album.images.map(image => image.url)}
            />
        ) : (
            <p>No se encontró el álbum</p>
        )}
        <button className='btn btn-primary' onClick={decrement}>Anterior</button>
        <button className='btn btn-primary' onClick={increment}>Siguiente</button>
    </>
);
};
