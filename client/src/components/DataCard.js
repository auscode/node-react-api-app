import React from "react";

const DataCard = ({ item, detailsVisible, toggleDetails }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-2 mr-2 ml-2">
      <div className="flex flex-wrap">
        <div className="w-1/5">{item.username}</div>
        <div className="w-1/5">
          <div className=" text-lg font-bold">Contact</div>
          {item.phone}
        </div>
        <div className="w-1/5">
          <div className=" text-lg font-bold">Email</div>
          {item.email}
        </div>
        <div className="w-1/5">
          <div className=" text-lg font-bold">Company</div>
          {item.company.name}
        </div>
        <div className="w-1/5">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-3xl"
            onClick={toggleDetails}
          >
            {detailsVisible ? "Hide Details" : "View Details"}
          </button>
        </div>
      </div>
      {detailsVisible && (
        <div className="mt-4 p-4 border-2 rounded-lg flex text-left">
          <div className="w-1/2">
            <div className="">
              <div className=" text-lg font-bold">Name</div>
              {item.name}
            </div>
            <div className="">
              <div className="text-md font-bold">Website</div>
              {item.website}
            </div>
            <div className="">
              <div className="text-lg font-bold">Company</div>
              <div className="">{item.company.name}</div>
              <div className="">
                <div className="text-sm font-bold">catchPhrase</div>
                {item.company.catchPhrase}
              </div>
              <div className="">
                <div className="text-sm font-bold">Bs</div>
                {item.company.bs}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <div className="text-lg font-bold">Address</div>
              <div className="flex">
                <div>Street: </div>
                <div>{item.address.street}</div>
              </div>
              <div className="flex">
                <div>Suite: </div>
                <div>{item.address.suite}</div>
              </div>
              <div className="flex">
                <div>City: </div>
                <div>{item.address.city}</div>
              </div>
              <div className="flex">
                <div>Zipcode:</div>
                <div>{item.address.zipcode}</div>
              </div>
              <div>
                <div className="text-md font-bold">GeoLocation:</div>
                <div className="flex">
                  <div className="mr-2">latitude: {item.address.geo.lat}</div>
                  <div>longitude: {item.address.geo.lng}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCard;
