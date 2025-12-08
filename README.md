# devcardx

A customizable developer profile popup card component for React projects — powered by Tailwind CSS.

## 🚀 Install


---

## 🧩 Usage

```jsx
import { DeveloperCard, DeveloperModal, useDeveloperModal } from "devcardx";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function App() {
  const modal = useDeveloperModal();

  const socials = [
    { icon: <FaGithub />, url: "https://github.com" },
    { icon: <MdEmail />, url: "mailto:example@gmail.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/1234567890" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" }
  ];

  const techStack = ["React", "Node.js", "Express", "MongoDB", "Tailwind"];

  return (
    <div>
      <button onClick={modal.show}>About Developer</button>

      <DeveloperModal open={modal.open} hide={modal.hide}>
        <DeveloperCard
          name="Simha"
          title="Full Stack Developer"
          avatar="/avatar.png"
          about="I build scalable tools."
          email="example@gmail.com"
          techStack={techStack}
          socials={socials}
          hide={modal.hide}
        />
      </DeveloperModal>
    </div>
  );
}
