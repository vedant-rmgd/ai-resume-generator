function SectionRenderer({ section, data }) {
  if (!data) return null;

  const sectionStyle = {
    Profile: "text-red-400",
    Skills: "text-red-400",
    "Soft Skills": "text-red-400",
    "Social Links": "text-red-400",
    "Experience": "text-red-400",
    Projects: "text-red-400",
    Education: "text-red-400",
    Achievements: "text-red-400",
  };

  const renderLinks = (links) => {
    return Object.entries(links).map(([key, value]) => {
      return value ? (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
          <a href={value} className="text-blue-600 underline">
            {value}
          </a>
        </p>
      ) : null;
    });
  };

  switch (section) {
    case "Profile":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle.Profile}`}>
            Profile
          </h2>
          <p>{data.summery}</p>
        </div>
      );

    case "Skills":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle.Skills}`}>
            Skills
          </h2>
          <p>{data.list}</p>
        </div>
      );

    case "Soft Skills":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle["Soft Skills"]}`}>
            Soft Skills
          </h2>
          <p>{data.list}</p>
        </div>
      );

    case "Social Links":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle["Social Links"]}`}>
            Social Links
          </h2>
          {renderLinks(data)}
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
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle.Experience}`}>
            Experience
          </h2>
          <p className="font-bold">
            {data.role} @ {data.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{data.duration}</p>
          <p>{data.description}</p>
        </div>
      );

    case "Projects":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle.Projects}`}>
            Projects
          </h2>
          <p>{data.info}</p>
        </div>
      );

    case "Education":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle.Education}`}>
            Education
          </h2>
          <p>{data.degree} - {data.institution}</p>
          <p>{data.year}</p>
        </div>
      );

    case "Achievements":
      return (
        <div className="mb-4">
          <h2 className={`text-xl font-light mb-1 border-b ${sectionStyle.Achievements}`}>
            Achievements
          </h2>
          <p>{data.details}</p>
        </div>
      );

    default:
      return null;
  }
}

export default SectionRenderer;
