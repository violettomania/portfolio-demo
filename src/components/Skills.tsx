import { skills } from '../data';
import { SkillProps } from '../data';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section className='py-20 align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill: SkillProps) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}
