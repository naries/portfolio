import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const skills = [
    {
        name: "JavaScript",
        progress: '80%'
    },
    {
        name: "Node Js",
        progress: '40%'
    },
    {
        name: "Python",
        progress: '60%'
    },
    {
        name: "React Js",
        progress: '80%'
    },
    {
        name: "Web Design",
        progress: '40%'
    },
    {
        name: "UI/UX Design",
        progress: '20%'
    },
]

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                {skills.map((skill, i) => <SkillsSection key = {i} skill={skill.name} progress={skill.progress} width={skill.progress} />)}
            </div>
        </div>
    )
}

export default AboutPage;
