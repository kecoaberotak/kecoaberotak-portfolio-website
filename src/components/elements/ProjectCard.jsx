const ProjectCard = () => {
  return (
    <div className="project-card">
      <a href="https://dagingue.vercel.app/" target="_blank" rel="noreferrer">
        <span className="text-putihLight font-semibold text-xs tracking-[0.3rem] mb-1">JAVASCRIPT</span>
        <h3 className="font-semibold text-putihLight text-2xl mb-3">Dagingue</h3>
        <p className="text-abuDark text-sm">Website company profile for beef slice shop. Build with 
          <br />React.js, Node.js, MongoDB and Firebase
        </p>
      </a>
    </div>
  );
};

export default ProjectCard;