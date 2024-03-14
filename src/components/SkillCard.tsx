import { SkillProps } from '../data';

export default function SkillCard({ icon, title, text }: SkillProps) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
}
