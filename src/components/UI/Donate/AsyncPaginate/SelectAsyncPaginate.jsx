import { useEffect, useState, useTransition } from "react";
import PropTypes from "prop-types";
import { AsyncPaginate } from "react-select-async-paginate";
import useProjects from "services/projects";
import useTranslation from "next-translate/useTranslation";

const SelectAsyncPaginate = (props) => {
  const [projectName, setProjectName] = useState(null);
  const { t } = useTranslation("common");

  useEffect(() => {
    setProjectName(props.projectName);
  }, [props.projectName]);

  const loadOptions = async (searchQuery, loadedOptions, { page }) => {
    const { projects } = useProjects({
      projectParams: {
        offset: (currentPage - 1) * limit,
        limit: limit,
      },
    });

    return {
      options: projects,
      hasMore: projects.length >= 1,
      additional: {
        page: searchQuery ? 2 : page + 1,
      },
    };
  };

  const onChange = (option) => {
    if (typeof props.onChange === "function") {
      props.onChange(option);
    }
  };

  return (
    <AsyncPaginate
      key={JSON.stringify(projectName)}
      value={props.value || ""}
      loadOptions={loadOptions}
      getOptionValue={(option) => option.name}
      getOptionLabel={(option) => option.name}
      onChange={onChange}
      isSearchable={false}
      placeholder={t("project")}
      additional={{
        page: 1,
      }}
    />
  );
};
SelectAsyncPaginate.propTypes = {
  projectName: PropTypes.string.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default SelectAsyncPaginate;
