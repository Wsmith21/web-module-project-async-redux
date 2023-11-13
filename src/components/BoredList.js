// BoredList.js
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBoredActivity } from "../actions/boredActions";

const BoredList = ({ boredActivity, loading, error, fetchBoredActivity }) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchBoredActivity();
  }, [fetchBoredActivity]);

  const handleButtonClick = async () => {
    if (!isFetching) {
      setIsFetching(true);
      await fetchBoredActivity();
      setIsFetching(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>You Bored? Not For Long!!</h2>
      <p>{boredActivity.activity}</p>
      

      <button onClick={handleButtonClick} disabled={isFetching}>
        {isFetching ? "Fetching..." : "Entertain Me!!"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  boredActivity: state.boredActivity,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchBoredActivity })(BoredList);
