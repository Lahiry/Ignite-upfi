import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  function handleOpenModal(url: string): void {
    onOpen();
    setSelectedImageUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="2.5rem">
        {cards.map(card => (
          <Card
            data={card}
            viewImage={url => handleOpenModal(url)}
            key={card.id}
          />
        ))}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage
          isOpen={isOpen}
          imgUrl={selectedImageUrl}
          onClose={onClose}
        />
      )}
    </>
  );
}
