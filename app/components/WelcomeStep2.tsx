import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export default function WelcomeStep2({ reviews }) {
  dayjs.extend(localizedFormat);

  return (
    <div className="card bg-card w-fit place-self-center">
      <figure className="bg-primary">
        <div className="w-full">
          <div className="h-full grid place-items-center py-3">
            <ul className="steps">
              <li className="step step-accent">Start</li>
              <li className="step step-accent">Show Reviews</li>
              <li className="step">Finish</li>
            </ul>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex">
          <div className="flex-1">
            <h2 className="card-title">List Your App Reviews!</h2>
          </div>
          <div className="flex-1 justify-end place-content-end content-end justify-items-end items-end text-right">
            <button className="btn btn-primary btn-sm text-white">Analyze Now!</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Review</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <span className="badge badge-primary badge-md badge-outline">
                        {dayjs(item.date).format('LL')} | {item.userName}
                      </span>
                      <br />
                      {item.text}
                    </td>
                    <td>{item.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
