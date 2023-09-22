import { useTicketContext } from './context';
import './css/detail-ticket.css';

export default function DetailTicket() {
  const { ticket } = useTicketContext();
  if (!ticket) return;
  return (
    <div>
      <table className='detail-ticket'>
        <thead>
          <tr>
            <th className='detail-ticket__header-cell'>ID</th>
            <th className='detail-ticket__header-cell'>Fecha de Creación</th>
            <th className='detail-ticket__header-cell'>Descripción</th>
            <th className='detail-ticket__header-cell'>Cantidad</th>
            <th className='detail-ticket__header-cell'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {ticket.detail.map((p, i) => {
            return (
              <tr
                key={p.id}
                className={`detail-ticket__row${
                  i % 2 ? '' : ' detail-ticket__row--contrast'
                }`}
              >
                <td className='detail-ticket__data-cell'>{p.id}</td>
                <td className='detail-ticket__data-cell'>{p.createdAt}</td>
                <td className='detail-ticket__data-cell'>{p.description}</td>
                <td className='detail-ticket__data-cell'>{p.quantity}</td>
                <td className='detail-ticket__data-cell'>${p.subTotal}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className='detail-ticket__total-row'>
            <td colSpan={4}>Total</td>
            <td className='detail-ticket__data-cell'>
              $
              {ticket.detail.reduce(
                (total, p) => total + parseFloat(p.subTotal),
                0,
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
