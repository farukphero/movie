import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [showDetails, setShowDetails] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
      
        setShowDetails(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {showDetails.map((details) => (
        <Card key={details.show.id} className="mt-6  ">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={details?.show?.image?.original} alt="show-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {details.show.name}
            </Typography>
            <Typography>
              <span className=" font-semibold">Status:</span>{" "}
              {details.show.status}
            </Typography>
            <Typography>
              <span className=" font-semibold">Type:</span> {details.show.type}
            </Typography>
            <Typography>
              <span className=" font-semibold">Language:</span>{" "}
              {details.show.language}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`/details?id=${details?.show?.id}`}>
              <Button>Read More</Button>{" "}
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default App;
