import React from "react";

export default function DeveloperCard({
  name = "Developer",
  title = "Full Stack Developer",
  avatar = "",
  about = "",
  techStack = [],
  socials = [],
  email = "",
  hide,
}) {
  return (
    <div className="bg-slate-900/90 text-white w-[350px] rounded-2xl shadow-xl p-6 relative">

      {/* Close Button */}
      <button
        onClick={hide}
        className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
      >
        ✕
      </button>

      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full border border-slate-700 shadow-md object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-semibold text-center mt-4">{name}</h2>
      <p className="text-gray-400 text-center text-sm">{title}</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-[26px] mt-4">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Tech Stack */}
      <h3 className="text-xs font-semibold mt-6 text-gray-300 tracking-wider text-center">
        TECH STACK
      </h3>

      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* About */}
      <p className="mt-5 text-gray-300 text-sm leading-relaxed text-center">
        {about}
      </p>

      {/* Contact Button */}
      {email && (
        <a
          href={`mailto:${email}`}
          className="block mt-6 bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-xl text-white font-medium"
        >
          Contact Me
        </a>
      )}
    </div>
  );
}
