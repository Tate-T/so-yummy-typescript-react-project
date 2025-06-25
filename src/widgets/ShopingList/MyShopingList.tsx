"use client";
import style from "./page.module.scss";

import Image from "next/image";
import Container from "@/shared/Container/Container";
import img from "../../../public/recipe/KAWAI.gif";
import iks from "../../../public/recipe/X.png";
import { useGetShopopingList } from "@/redux/apis/shipingListApi";
import { useRemoveShopingLIst } from "@/redux/apis/shipingListApi";

export default function ShopingList() {
  const [removeShopingList] = useRemoveShopingLIst();
  const { data, error } = useGetShopopingList();
  return (
    <section className={style.section}>
      <Container>
        <div>
          <h1 className={style.title}>Shopping list</h1>
        </div>
        <div className={style.greeBoxList}>
          <div>
            <p className={style.greeTxt}>Products</p>
          </div>
          <div className={style.secondTxtGree}>
            <p className={style.greeTxt}>Number</p>
            <p className={style.greeTxt}>Remove</p>
          </div>
        </div>
        <ul className={style.listItem}>
          {data?.shoppingList.map((data) => {
            return (
              <li className={style.item} key={data.productId}>
                <div className={style.info}>
                  <div className={style.imageWrapper}>
                    <Image
                      width={100}
                      height={100}
                      className={style.imageItem}
                      src={data.thumb}
                      alt={data.title}
                    />
                  </div>
                  <span className={style.nameItem}>{data.title}</span>
                </div>

                <div className={style.right}>
                  <span className={style.quantity}>{data.measure[0]}</span>
                  <button
                    onClick={() =>
                      removeShopingList({ productId: data.productId, measure: data.measure[0] })
                    }
                    className={style.deleteBtn}
                  >
                    <Image className={style.frest} alt="delete" src={iks} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
