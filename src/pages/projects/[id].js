import FilteredProjects from "components/UI/Projects/FilteredProjects/FilteredProjects";
import React from "react";
import SEO from "components/SEO";

function ProjectItem() {
  return (
    <div>
      <SEO />
      <FilteredProjects />
    </div>
  );
}

export default ProjectItem;
