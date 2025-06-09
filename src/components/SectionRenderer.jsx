function SectionRenderer({ section, data }) {
  if (!data) return null;

  switch (section) {
    case "Profile":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Profile</h2>
          <p>{data.summary}</p>
        </div>
      );

    case "Soft Skills":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Soft Skills</h2>
          <p>{data.list}</p>
        </div>
      );

    case "Soft Skills":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Soft Skills</h2>
          <p>{data.list}</p>
        </div>
      );

    case "Social Links":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Social Links</h2>
          {data.linkedin && (
            <p>
              LinkedIn:{" "}
              <a href={data.linkedin} className="text-blue-600 underline">
                {data.linkedin}
              </a>
            </p>
          )}
          {data.github && (
            <p>
              GitHub:{" "}
              <a href={data.github} className="text-blue-600 underline">
                {data.github}
              </a>
            </p>
          )}
          {data.portfolio && (
            <p>
              Portfolio:{" "}
              <a href={data.portfolio} className="text-blue-600 underline">
                {data.portfolio}
              </a>
            </p>
          )}
        </div>
      );

    case "Profile Picture":
      return (
        <div className="mb-4 text-center">
          <img
            src={data.image}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-zinc-400 dark:border-zinc-600"
          />
        </div>
      );

    case "Experience":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Experience</h2>
          <p className="font-bold">
            {data.role} @ {data.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {data.duration}
          </p>
          <p>{data.description}</p>
        </div>
      );

    case "Projects":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Projects</h2>
          <p>{data.links}</p>
        </div>
      );

    case "Education":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Education</h2>
          <p>
            {data.degree} - {data.institution}
          </p>
          <p>{data.year}</p>
        </div>
      );

    case "Achievements":
      return (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1 border-b">Achievements</h2>
          <p>{data.list}</p>
        </div>
      );

    default:
      return null;
  }
}

export default SectionRenderer;
