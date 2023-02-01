import { useRouter } from "next/router";
import React from "react";
import useSpheres from "services/spheres";

function FilteredProjects() {
  const router = useRouter();
  const { sphere } = useSpheres({
    dataSphere: {
      offset: 0,
      limit: 99,
      spheres_id: router.query.id,
    },
  });

  return <div></div>;
}

export default FilteredProjects;
