import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import JobApply from "./JobApply";
import { useContext, useState } from "react";
import userContext from "./userContext";

/** Job Card component
 * renders details about a job
 *
 * Props:
 * - job  {id, title, salary, equity, companyName}
 *
 * State:
 * - none
 *
 * App -> RouteList -> JobList -> JobCard
 */

function JobCard({ job, applyJob }) {
  const { user } = useContext(userContext);
  const { id, title, salary, equity, companyName } = job;

  function userJob() {
    return user.applications.includes(id);
  }

  return (
    <Card className="m-2 p-2" style={{ width: "18rem", height: "14rem" }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {companyName}
        </CardSubtitle>
        <CardText>Salary: {salary}</CardText>
        {equity && <CardText>Equity: {equity}</CardText>}
      </CardBody>
      <JobApply applied={userJob()} id={id} applyJob={applyJob} />
    </Card>
  );
}

export default JobCard;
