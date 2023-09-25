import React from 'react'

const CardSlider = () => {

  /* FORMATEO FECHA */
  const formatDate = (isoDateString) => {
    const options = { day: "numeric", month: "long" };
    return new Date(isoDateString).toLocaleDateString("es-ES", options);
  };
  /* REDIRECCION AL PINCHAR EN LA TARJETA */

  const handleDivClick = (event) => {
    navigate(`/eventdetail/${event._id}`);
  };


  return (
    <div
    key={event._id}
    className="evento-individual"
    onClick={() => {
      handleDivClick(event);
    }}
  >
    <div className="container-img-profile">
      <div className="img-profile">
        {event.image ? (
          <Image
            className="img-profile"
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={event.image_url}
            alt="avatar-profile-image"
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
    <div className="info-evento">
      <div className="category">
        <div className="texto">
          {event.category} - <span id="edem">{event.organization}</span>
        </div>
        <div className="flecha">
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
      <div className="fecha">
        {formatDate(event.date)}{" "}
        <span className="hora">{event.time}</span>
      </div>
    </div>
  </div>
  )
}

export default CardSlider