import './style.css'


const openingHours = [
  { day: 'Pondělí', time: 'ZAVŘENO' },
  { day: 'Úterý', time: '11:00 - 22:00' },
  { day: 'Středa', time: '11:00 - 22:00' },
  { day: 'Čtvrtek', time: '11:00 - 22:00' },
  { day: 'Pátek', time: '11:00 - 23:00' },
  { day: 'Sobota', time: '9:00 - 02:00' },
  { day: 'Neděle', time: '9:00 - 02:00' },
];



export const Contact = () => {
  return (
    <section>
      <div className="container">
        <h2>Kde nás najdete</h2>
        <div className="contact">
          <address className="contact__address">
            Na Mýtě 240<br />
            514 03 Byšky nad Jizerou<br />
            Tel: <a href="tel:+420775334427">+420 775 334 427</a>
          </address>

          <table className="contact__hours">
            <tbody>
              {openingHours.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.day}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <iframe
            src="https://mapy.cz/s/paloregama"
            width="100%"
            height="600"
            frameBorder="0"
            title="Café Lóra na mapě"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
