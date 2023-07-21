import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiCaretRightCircle, BiCaretLeftCircle } from "react-icons/bi";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <BiCaretRightCircle
      className={className}
      color="#000000"
      style={{
        ...style,
        height: "50px",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <BiCaretLeftCircle
      style={{
        ...style,
        height: "50px",
        width: "30px",
        zIndex: 10,
      }}
      className={className}
      color="#000000"
      size={50}
      onClick={onClick}
    />
  );
};


// Define the interface for the Pokemon data
interface PokemonData {
  name: string;
  id: number;
  height: number;
  weight: number;
  // Add more properties as needed based on the API response
}

const fetchPokemonData = async (name: string): Promise<any | null> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: PokemonData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

interface PokemonComponentProps {
  name: string;
}

const PokemonComponent: React.FC<PokemonComponentProps> = ({ name }) => {
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPokemonData(name).then((data) => {
      setPokemonData(data);
      console.log(data);
      setIsLoading(false);
    });
  }, [name]); // Fetch data whenever the name prop changes

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!pokemonData) {
    return <p>Error fetching Pokemon data. Please check the name and try again later.</p>;
  }

  const typesList = pokemonData.types.map((type) => type.type.name).join(', ');
  // Filter sprites to include only front_default, front_shiny, back_default, and back_shiny
  const spritesArray = [
    pokemonData.sprites.front_default,
    pokemonData.sprites.front_shiny,
    pokemonData.sprites.back_default,
    pokemonData.sprites.back_shiny,
  ].filter((sprite) => sprite !== null);

  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true
        },
      }
    ],
  };

  return (
    <>
    <div className="section space-y-5 p-5">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold capitalize">{pokemonData.name}</h3>
          <p><span className="font-semibold">ID: </span> {pokemonData.id}</p>
          <p><span className="font-semibold">Types:</span> {typesList}</p>
          {/* <img src={pokemonData.sprites.front_default}></img> */}

          {/* react-slick Carousel */}
          <Slider {...settings}>
            {spritesArray.map((sprite, index) => (
              <div key={index}>
                <img
                  src={sprite}
                  width="125px"
                  height="125px"
                  alt={`Sprite ${index + 1}`}
                  className="flex items-center justify-center" />
              </div>
            ))}
          </Slider>

        </div>
    </div>
    </>
  );
};

export default PokemonComponent;
