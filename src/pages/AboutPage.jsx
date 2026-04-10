import React from 'react';

const AboutPage = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'Python', 'Django',
    'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'daisyUI', 'Git', 'AWS', 'Docker'
  ];

  return (
    <div className="container mx-auto p-8 py-16 max-w-4xl">
      <h2 className="text-5xl font-bold text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
        <img
          src="https://via.placeholder.com/250x250/808080/FFFFFF?text=Jane"
          alt="Jane Doe"
          className="rounded-full w-48 h-48 object-cover shadow-lg flex-shrink-0"
        />
        <div className="text-lg leading-relaxed text-center lg:text-left">
          <p className="mb-4">
            Hello! I'm Jane Doe, a dedicated Full-Stack Developer with over 5 years of experience in building
            dynamic and user-centric web applications. My journey in tech started with a fascination for
            how software can solve real-world problems and enhance daily experiences.
          </p>
          <p className="mb-4">
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and also have strong proficiency
            in Python with Django. I thrive in environments where I can continuously learn and apply new
            technologies to create efficient, scalable, and maintainable solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes,
            or diving into a good book. I believe in a balanced approach to life and work, fostering creativity
            and well-being.
          </p>
        </div>
      </div>

      <h3 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
        My Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="badge badge-lg badge-primary p-4 text-base shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;