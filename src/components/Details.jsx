import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Details = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  console.log(id);

  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const showWithId = data.find((show) => show.show.id.toString() === id);
        if (showWithId) {
          console.log(showWithId.show);
          setShowDetails(showWithId.show);
        }
      });
  }, [id]);

 

  return (
    <div className="w-full lg:w-10/12 h-full mx-auto flex justify-center items-center my-10">
      <Card className="w-full flex lg:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-11/12 lg:w-2/5 mx-auto shrink-0"
        >
          <img
            src={showDetails?.image?.original}
            alt="show-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {showDetails.name}
          </Typography>
          <Typography
            color="gray"
            className="mb-8 font-normal"
            dangerouslySetInnerHTML={{ __html: showDetails.summary }}
          ></Typography>

          <Typography className="flex items-center gap-2">
            <span className="font-semibold">Official Site:</span>{" "}
            <a href={showDetails.officialSite} className="underline ">
              {showDetails.officialSite}
            </a>
          </Typography>
          <div className="pt-0 flex justify-between items-baseline lg:mt-72">
          <Link to={`/`}>
              <button className="bg-none underline">Home</button>{" "}
            </Link>
            <Link to={`/movie?name=${showDetails?.name}`}>
              <Button>Book a Movie Ticket</Button>{" "}
            </Link>
          </div>
        </CardBody>
        
      </Card>
    </div>
  );
};

export default Details;
