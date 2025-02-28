import React from 'react';

export const Card = ({ id, name, sprites = [] }) => {
    return (
        <section style={{ height: 300 }}>
            <h2 className="text-capitalize">#{id} - {name}</h2>
            <div>
                {sprites.length > 0 ? (
                    sprites.map(sprite => (
                        <img 
                            src={sprite} 
                            key={sprite} 
                            alt={name} 
                            style={{ width: 200, borderRadius: '10px', margin: '10px' }}
                        />
                    ))
                ) : (
                    <p>No hay imágenes disponibles</p>
                )}
            </div>
        </section>
    );
};
