import React from "react";
import BackArrow from "../../components/backArrow";
import TableRow from "./tableRow";
import { motion } from "framer-motion";

function CartTable({ next, loading, order, total }) {
  return (
    <>
      <BackArrow />
      <p className="glow font-bold text-xl px-8 text-center font-yellowtail md:text-4xl sm:w-1/2 md:w-[70%] lg:text-5xl lg:w-[65%]">
        Place your food order online from the confort of your own house
      </p>
      <div className="relative overflow-x-auto">
        <table className="border-2 border-goldenYellow text-sm text-left sm:rounded-lg">
          <thead className="text-lg text-center font-yellowtail text-goldenYellow">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <TableRow
                id={order.id}
                meal={order.title}
                price={order.price}
                count={order.quantity}
              />
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-white">
              <th scope="row" className="px-6 py-3 text-base col-span-2">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">{`${total} MAD`}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <motion.p
        whileTap={{
          scale: 0.8,
        }}
        className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
        onClick={next}
      >
        Purchase
      </motion.p>
    </>
  );
}

export default CartTable;