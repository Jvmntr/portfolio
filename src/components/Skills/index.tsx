import React, { useState } from 'react';
import { skillsData, ICategory, ISkill } from '../../data/skills';
import {
  SkillsSection,
  SectionTitle,
  SkillsContainer,
  CategoryQuadrant,
  CategoryTitle,
  IconsContainer,
  SkillIcon,
  DescriptionContainer,
  DescriptionText,
  PlaceholderText,
  DescriptionTitle,
} from './styles';

const Skills: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<{ [key: string]: ISkill | null }>({
    'Front-end': null,
    'Back-end': null,
    'Cloud': null,
    'DevOps': null,
  });

  const handleSkillSelect = (categoryTitle: string, skill: ISkill) => {
    setSelectedSkills(prev => ({
      ...prev,
      [categoryTitle]: skill,
    }));
  };

  return (
    <SkillsSection id="habilidades">
      <SectionTitle>Habilidades</SectionTitle>
      <SkillsContainer>
        {skillsData.map((category: ICategory) => (
          <CategoryQuadrant key={category.title}>
            <div>
              <CategoryTitle>{category.title}</CategoryTitle>
              <IconsContainer>
                {category.skills.map((skill: ISkill) => (
                  <SkillIcon
                    key={skill.name}
                    src={require(`../../assets/icons/${skill.icon}`)}
                    alt={`${skill.name} icon`}
                    isSelected={selectedSkills[category.title]?.name === skill.name}
                    onClick={() => handleSkillSelect(category.title, skill)}
                  />
                ))}
              </IconsContainer>
            </div>
            <DescriptionContainer>
              {selectedSkills[category.title] ? 
              (
                <>
                    <DescriptionTitle>{selectedSkills[category.title]?.name}</DescriptionTitle>
                    <DescriptionText>{selectedSkills[category.title]?.description}</DescriptionText>
                </>
              ) : (
                <PlaceholderText>Selecione uma tecnologia para ver a descrição.</PlaceholderText>
              )}
            </DescriptionContainer>
          </CategoryQuadrant>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;