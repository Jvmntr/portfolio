import React from 'react';
import {
  GlobalStyle,
  ModalOverlay,
  ModalContent,
  CloseButton,
  SectionTitle,
  Summary,
  TagsContainer,
  Tag,
  LinksContainer,
  SocialLink,
} from './styles';

import { PersonalData } from '../../data/personal';

export interface PersonalModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PersonalData;
}

const PersonalModal: React.FC<PersonalModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <GlobalStyle lockScroll={isOpen} />
      <ModalOverlay data-testid="modal-overlay" isOpen={isOpen} onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose} />
          <SectionTitle>Quem é {data.name}?</SectionTitle>
          <Summary>{data.summary}</Summary>

          <SectionTitle>Outros Interesses</SectionTitle>
          <TagsContainer>
            {data.interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </TagsContainer>
          <SectionTitle>Me encontre aqui!</SectionTitle>
          <LinksContainer>
            <SocialLink href={data.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src={require(`../../assets/icons/${data.linksImage.instagram}`)} alt="" />
              </SocialLink>
              <SocialLink href={data.links.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <img src={require(`../../assets/icons/${data.linksImage.spotify}`)} alt="" />
              </SocialLink>
          </LinksContainer>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default PersonalModal;