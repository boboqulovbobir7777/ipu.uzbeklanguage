import { useState } from "react";

import Wrapper from "../Wrapper/Wrapper";

import teacherImage from "../../assets/teacher.png";

export default function AboutTeacher() {
  let [allText, setAllText] = useState(false);
  return (
    <section className="mb-15">
      <Wrapper className="flex items-center justify-between gap-10 max-md:flex-col-reverse ">
        <div className="flex flex-col gap-5 max-w-[700px]">
          <h3 className="text-xl font-semibold">Bazarova Dildor Baxronovna</h3>
          <div className="h-[1px] bg-black"></div>
          <p className="select-none">
            Bazarova Dildor Baxronovna – filologiya fanlari bo‘yicha falsafa
            doktori (PhD), hozirda Iqtisodiyot va pedagogika universiteti O‘zbek
            tili va adabiyoti kafedrasi dotsenti lavozimida ishlamoqda.
            <br /> U 1994-yilda Qarshi davlat universitetini tamomlagan. Umumiy
            mehnat staji 37 yil, pedagogik staji 31 yilni tashkil etadi. Mehnat
            faoliyatini Qarshi davlat universitetida o‘qituvchilikdan boshlagan.
            2003–2023 yillar davomida shu universitetda katta o‘qituvchi,
            dotsent vazifasida faoliyat yuritgan.
            {allText
              ? "2020-yilda “O‘zbek tilida variantdosh birliklarning nutqiy qo‘llanishi va uslubiy xususiyatlari” mavzusida dissertatsiya himoya qilib, PhD ilmiy darajasini olgan. Ilmiy faoliyati davomida 80 dan ortiq maqola, 1 ta monografiya, o‘quv va uslubiy qo‘llanmalar muallifi hisoblanadi.\n Hozirda 1 nafar mustaqil izlanuvchi va 1 nafar magistrantga ilmiy rahbarlik qilmoqda. Kafedra salohiyatini oshirish, ilmiy tadqiqotlarni rivojlantirish va darsliklar tayyorlash ustida faol ish olib bormoqda."
              : ""}
            <span
              className="cursor-pointer points text-blue-600"
              title={allText ? "yashirish" : "ko'proq malumot"}
              onClick={() => setAllText(!allText)}
            >
              {allText ? "(yashirish)" : "(davomi ko'rish uchun bosing...)"}
            </span>
          </p>
        </div>
        <div className="max-w-2xs w-full max-md:w-[150px] rounded-2xl overflow-hidden">
          <img src={teacherImage} alt="Teacher" className="w-full" />
        </div>
      </Wrapper>
    </section>
  );
}
