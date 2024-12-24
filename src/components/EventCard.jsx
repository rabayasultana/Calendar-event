const EventCard = (event) => {
  
  return (
    <div>
      <div className="border border-blue-900">
        <p>date: {event.event.date}</p>
        <p>title: {event.event.title} </p>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          See details
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="hero bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <div>
                  <h1 className="text-5xl font-bold">{event.event.title}</h1>
                  <p className="py-6">{event.event.details}</p>
                  <p className="py-6">
                    Location:
                    {event.event.location}
                  </p>
                  <div className="flex justify-around">
                    <p className="py-6">Start Time: {event.event.startTime}</p>
                    <p className="py-6">End Time: {event.event.endTime}</p>
                  </div>
                  <div className="flex justify-around">
                    <p className="py-6">Category: {event.event.category}</p>
                    <p className="py-6">Priority: {event.event.priority}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default EventCard;
