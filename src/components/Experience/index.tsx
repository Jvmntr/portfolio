import React from 'react';
import { ExperienceItem } from '../../data/experiences'; 

import {
  ExperienceItemCard,
  ItemHeader,
  ItemTitle,
  ItemCompanyPeriod,
  ItemCompany,
  ItemPeriod,
  ItemLocation,
  ItemDescriptionList,
  ItemDescription,
  ItemTechnologiesContainer,
  ItemTechnology,
  ItemSummary, 
} from './styles';

interface ExperienceItemProps {
  item: ExperienceItem;
  className?: string;
}

const ExperienceItemComponent: React.FC<ExperienceItemProps> = ({ item, className }) => {
  return (
    <ExperienceItemCard className={className}>
      <ItemHeader>
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemCompanyPeriod>
            <ItemCompany>{item.companyOrInstitution}</ItemCompany>
            <ItemPeriod>{item.period}</ItemPeriod>
          </ItemCompanyPeriod>
        </div>
        <ItemLocation>{item.location}</ItemLocation>
      </ItemHeader>
      {item.summary && <ItemSummary>{item.summary}</ItemSummary>} {/* Renderiza o resumo se ele existir */}
      <ItemDescriptionList>
        {item.description.map((desc, index) => (
          <ItemDescription key={index}>{desc}</ItemDescription>
        ))}
      </ItemDescriptionList>
      {item.technologies && item.technologies.length > 0 && (
        <ItemTechnologiesContainer>
          {item.technologies.map((tech, index) => (
            <ItemTechnology key={index}>{tech}</ItemTechnology>
          ))}
        </ItemTechnologiesContainer>
      )}
    </ExperienceItemCard>
  );
};

export default ExperienceItemComponent;