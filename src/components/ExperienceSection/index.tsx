import React, { useRef, useState, useEffect } from 'react';
import ExperienceItem from '../Experience';
import { professionalExperiences, academicExperiences } from '../../data/experiences';

import {
  ExperienceContainer,
  ExperienceContent,
  SectionTitle,
  ExperienceList,
  CarouselControls,
  CarouselButton,
} from './styles';

const Experience = () => {
  const professionalCarouselRef = useRef<HTMLDivElement>(null);
  const academicCarouselRef = useRef<HTMLDivElement>(null);

  const [isProfPrevDisabled, setIsProfPrevDisabled] = useState(true);
  const [isProfNextDisabled, setIsProfNextDisabled] = useState(false);
  const [isAcadPrevDisabled, setIsAcadPrevDisabled] = useState(true);
  const [isAcadNextDisabled, setIsAcadNextDisabled] = useState(false);

  const updateCarouselButtonStates = (ref: React.RefObject<HTMLDivElement | null>, setPrev: React.Dispatch<React.SetStateAction<boolean>>, setNext: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      setPrev(scrollLeft <= 0);
      setNext(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const ref = professionalCarouselRef.current;
    const handleScroll = () => updateCarouselButtonStates(professionalCarouselRef, setIsProfPrevDisabled, setIsProfNextDisabled);

    if (ref) {
      handleScroll();
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const ref = academicCarouselRef.current;
    const handleScroll = () => updateCarouselButtonStates(academicCarouselRef, setIsAcadPrevDisabled, setIsAcadNextDisabled);

    if (ref) {
      handleScroll();
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'prev' | 'next') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth;

      if (direction === 'next') {
        ref.current.scrollLeft += scrollAmount;
      } else {
        ref.current.scrollLeft -= scrollAmount;
      }
      setTimeout(() => {
          if (ref === professionalCarouselRef) {
            updateCarouselButtonStates(ref, setIsProfPrevDisabled, setIsProfNextDisabled);
          } else if (ref === academicCarouselRef) {
            updateCarouselButtonStates(ref, setIsAcadPrevDisabled, setIsAcadNextDisabled);
          }
      }, 150);
    }
  };

  return (
    <ExperienceContainer id="experiencias">
      <ExperienceContent>
        <SectionTitle>Experiência Profissional</SectionTitle>
        <ExperienceList ref={professionalCarouselRef}>
          {professionalExperiences.map((item, index) => (
            <ExperienceItem key={index} item={item} className="experience-item-card" />
          ))}
        </ExperienceList>
        <CarouselControls>
          <CarouselButton onClick={() => scrollCarousel(professionalCarouselRef, 'prev')} disabled={isProfPrevDisabled}>
            &#8249;
          </CarouselButton>
          <CarouselButton onClick={() => scrollCarousel(professionalCarouselRef, 'next')} disabled={isProfNextDisabled}>
            &#8250;
          </CarouselButton>
        </CarouselControls>

        <SectionTitle>Formação Acadêmica</SectionTitle>
        <ExperienceList ref={academicCarouselRef}>
          {academicExperiences.map((item, index) => (
            <ExperienceItem key={index} item={item} className="experience-item-card" />
          ))}
        </ExperienceList>
        <CarouselControls>
          <CarouselButton onClick={() => scrollCarousel(academicCarouselRef, 'prev')} disabled={isAcadPrevDisabled}>
            &#8249;
          </CarouselButton>
          <CarouselButton onClick={() => scrollCarousel(academicCarouselRef, 'next')} disabled={isAcadNextDisabled}>
            &#8250;
          </CarouselButton>
        </CarouselControls>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;