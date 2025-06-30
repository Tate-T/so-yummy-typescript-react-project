"use client";
import style from "./page.module.scss";

import Image from "next/image";
import Container from "@/shared/Container/Container";
import img from "../../../public/recipe/salat.png";
import iks from "../../../public/recipe/X.png";
import { useGetShopopingList } from "@/redux/apis/shipingListApi";
import { useRemoveShopingLIst } from "@/redux/apis/shipingListApi";

export default function ShopingList() {
  const [removeShopingList] = useRemoveShopingLIst();
  const { data, error, isLoading } = useGetShopopingList();

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

        {isLoading ? (
          <p className={style.loading}>Loading...</p>
        ) : data?.shoppingList.length === 0 ? (
          <div className={style.placeholder}>
            <p className={style.noItemsText}>Your shopping list is empty 🛒</p>
          </div>
        ) : (
          <ul className={style.listItem}>
            {data?.shoppingList.map((item) => (
              <li className={style.item} key={item.productId}>
                <div className={style.info}>
                  <div className={style.imageWrapper}>
                    <Image
                      width={100}
                      height={100}
                      className={style.imageItem}
                      src={item.thumb}
                      alt={item.title}
                    />
                  </div>
                  <span className={style.nameItem}>{item.title}</span>
                </div>

                <div className={style.right}>
                  <span className={style.quantity}>{item.measure[0]}</span>
                  <button
                    onClick={() =>
                      removeShopingList({
                        productId: item.productId,
                        measure: item.measure[0],
                      })
                    }
                    className={style.deleteBtn}
                  >
                    <Image className={style.frest} alt="delete" src={iks} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
