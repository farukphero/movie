import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Movie = () => {
    const location = useLocation();
    const name = new URLSearchParams(location.search).get("name");
 
  
    const [showDetails, setShowDetails] = useState([]);
  
    useEffect(() => {
      fetch("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => res.json())
        .then((data) => {
          const showWithId = data.find((show) => show.show.name.toString() === name);
          if (showWithId) {
            console.log(showWithId.show);
            setShowDetails(showWithId.show);
          }
        });
    }, [name]);

 

  return (
    <div className="flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Link to={"/"}>
        <button className="text-start my-6 underline">Home</button>
        </Link>
        <Typography variant="h4" color="blue-gray">
          {showDetails.name}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
               Address
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
           
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
          
        </form>
      </Card>
    </div>
  );
};

export default Movie;
