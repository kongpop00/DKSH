export interface PolicySection {
    id: string;
    title: string;
    content: string;
    subsections?: PolicySubsection[];
}

export interface PolicySubsection {
    id: string;
    title: string;
    content: string;
    items?: string[];
}

export interface PolicyData {
    title: string;
    sections: PolicySection[];
}

export const privacyPolicyTH: PolicyData = {
    title: "นโยบายการคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย (\"วว.\") ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลและข้อมูลอื่นอันเกี่ยวกับท่าน (รวมเรียกว่า \"ข้อมูล\") เพื่อให้ท่านสามารถเชื่อมั่นได้ว่า วว. มีความโปร่งใสและความรับผิดชอบในการเก็บ รวบรวม ใช้หรือเปิดเผยข้อมูลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (\"กฎหมายคุ้มครองข้อมูลส่วนบุคคล\") รวมถึงกฎหมายอื่นที่เกี่ยวข้อง\n\nวว. จึงได้กำหนดนโยบายการคุ้มครองข้อมูลส่วนบุคคลขึ้นเพื่อสื่อสารให้กับผู้บริหาร พนักงาน ลูกจ้าง และผู้ให้บริการภายนอกของสถาบันทราบและนำไปปฏิบัติ เพื่อให้มั่นใจว่าข้อมูลส่วนบุคคลที่สถาบันได้รับจะถูกนำไปใช้ตรงตามความต้องการและถูกต้องตามกฎหมาย ดังต่อไปนี้"
        },
        {
            id: "scope",
            title: "1. ขอบเขตการบังคับใช้นโยบาย",
            content: "นโยบายนี้ใช้บังคับกับข้อมูลส่วนบุคคลของบุคคลซึ่งมีความสัมพันธ์กับ วว. ในปัจจุบันและที่อาจมีในอนาคตซึ่งถูกประมวลผลข้อมูลส่วนบุคคลโดย วว. เจ้าหน้าที่ พนักงานตามสัญญา หน่วยธุรกิจหรือหน่วยงานรูปแบบอื่นที่ดำเนินการโดย วว. และรวมถึงคู่สัญญาหรือบุคคลภายนอกที่ประมวลผลข้อมูลส่วนบุคคลแทน หรือในนามของ วว. (\"ผู้ประมวลผลข้อมูลส่วนบุคคล\") ภายใต้ผลิตภัณฑ์และบริการต่าง ๆ เช่น เว็บไซต์ระบบ แอปพลิเคชัน เอกสารหรือบริการในรูปแบบอื่นที่ควบคุม ดูแลโดย วว. (รวมเรียกว่า \"บริการ\")"
        },
        {
            id: "definitions",
            title: "2. คำนิยาม",
            content: "",
            subsections: [
                {
                    id: "personal-data",
                    title: "2.1 ข้อมูลส่วนบุคคล",
                    content: "หมายถึง ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ ไม่ว่าทางตรงหรือทางอ้อม แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรมโดยเฉพาะ"
                },
                {
                    id: "sensitive-data",
                    title: "2.2 ข้อมูลส่วนบุคคลอ่อนไหว",
                    content: "หมายถึง ข้อมูลที่เป็นเรื่องส่วนบุคคลโดยแท้ของบุคคล แต่มีความละเอียดอ่อนและอาจสุ่มเสี่ยงในการเลือกปฏิบัติอย่างไม่เป็นธรรม เช่น เชื้อชาติ เผ่าพันธุ์ ความคิดเห็นทางการเมือง ความเชื่อในลัทธิ ศาสนาหรือปรัชญา พฤติกรรมทางเพศ ประวัติอาชญากรรม ข้อมูลสุขภาพ ความพิการ ข้อมูลสหภาพแรงงาน ข้อมูลพันธุกรรม ข้อมูลชีวภาพ หรือข้อมูลอื่นใด ซึ่งกระทบต่อเจ้าของข้อมูลส่วนบุคคลในทำนองเดียวกันตามที่คณะกรรมการคุ้มครองข้อมูลส่วนบุคคลประกาศกำหนด"
                },
                {
                    id: "data-owner",
                    title: "2.3 เจ้าของข้อมูลส่วนบุคคล",
                    content: "หมายถึง ตัวบุคคลที่เป็นเจ้าของข้อมูลส่วนบุคคลนั้น แต่ไม่ใช่กรณีที่บุคคลมีความเป็นเจ้าของข้อมูลหรือเป็นผู้สร้างหรือเก็บรวบรวมข้อมูลนั้นเอง โดยเจ้าของข้อมูลส่วนบุคคลนี้จะหมายถึงบุคคลธรรมดาเท่านั้น และไม่รวมถึง \"นิติบุคคล\" ที่จัดตั้งขึ้นตามกฎหมาย เช่น บริษัท สมาคม มูลนิธิ หรือองค์กรอื่นใด"
                },
                {
                    id: "data-controller",
                    title: "2.4 ผู้ควบคุมข้อมูลส่วนบุคคล",
                    content: "หมายถึง บุคคลหรือนิติบุคคลซึ่งมีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวมใช้ หรือเปิดเผยข้อมูลส่วนบุคคล"
                },
                {
                    id: "data-processor",
                    title: "2.5 ผู้ประมวลผลข้อมูลส่วนบุคคล",
                    content: "หมายถึง บุคคลหรือนิติบุคคลซึ่งดำเนินการเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลตามคำสั่งหรือในนามของผู้ควบคุมข้อมูลส่วนบุคคล ทั้งนี้ บุคคลหรือนิติบุคคลซึ่งดำเนินการดังกล่าวไม่เป็นผู้ควบคุมข้อมูลส่วนบุคคล"
                }
            ]
        },
        {
            id: "data-sources",
            title: "3. แหล่งที่มาของข้อมูลส่วนบุคคลที่ วว. เก็บรวบรวม",
            content: "วว. เก็บรวบรวมหรือได้มาซึ่งข้อมูลส่วนบุคคลประเภทต่าง ๆ จากแหล่งข้อมูลดังต่อไปนี้",
            subsections: [
                {
                    id: "direct-collection",
                    title: "",
                    content: "3.1 ข้อมูลส่วนบุคคลที่ วว. เก็บรวบรวมจากเจ้าของข้อมูลส่วนบุคคลโดยตรงในช่องทางให้บริการต่าง ๆ เช่น ขั้นตอนการสมัคร ลงทะเบียน สมัครงานลงนามในสัญญา เอกสาร ทำแบบสำรวจหรือใช้งานผลิตภัณฑ์บริการ หรือช่องทางให้บริการอื่นที่ควบคุมดูแลโดย วว.\n\nหรือเมื่อเจ้าของข้อมูลส่วนบุคคลติดต่อสื่อสารกับ วว. ณ ที่ทำการหรือผ่านช่องทางติดต่ออื่นที่ควบคุมดูแลโดย วว. เป็นต้น"
                },
                {
                    id: "website-collection",
                    title: "",
                    content: "3.2 ข้อมูลที่ วว. เก็บรวบรวมจากการที่เจ้าของข้อมูลส่วนบุคคลเข้าใช้งานเว็บไซต์ผลิตภัณฑ์หรือบริการอื่น ๆ\n\nตามสัญญาหรือตามพันธกิจ"
                },
                {
                    id: "third-party-collection",
                    title: "",
                    content: "3.3 ข้อมูลส่วนบุคคลที่ วว. เก็บรวบรวมจากแหล่งอื่น โดยที่แหล่งข้อมูลดังกล่าวมีอำนาจหน้าที่ มีเหตุผลที่ชอบด้วยกฎหมายหรือได้รับความยินยอมจากเจ้าของข้อมูลส่วนบุคคลแล้วในการเปิดเผยข้อมูลแก่ วว. รวมถึงจากความจำเป็นเพื่อให้บริการตามสัญญาที่อาจมีการแลกเปลี่ยนข้อมูลส่วนบุคคลกับหน่วยงานคู่สัญญาได้"
                }
            ]
        },
        {
            id: "processing-purposes",
            title: "4. วัตถุประสงค์ในการประมวลผลข้อมูลส่วนบุคคล",
            content: "วว. จะเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคลของท่านเพื่อวัตถุประสงค์ในการดำเนินงานของ วว.การศึกษาวิจัย การให้บริการ การติดต่อประสานงาน การให้ข้อมูลข่าวสาร การประชาสัมพันธ์รวมทั้งการจัดทำฐานข้อมูล การสำรวจความคิดเห็นในกิจการหรือกิจกรรมของ วว. เพื่อปรับปรุงคุณภาพการทำงานให้มีประสิทธิภาพมากยิ่งขึ้น ภายใต้วัตถุประสงค์ในการดำเนินงานของ วว. และ/หรือ ตามที่กฎหมายกำหนด โดย วว. จะจัดเก็บและใช้ข้อมูลดังกล่าวตามระยะเวลาเท่าที่จำเป็น ตามวัตถุประสงค์ที่ได้แจ้งเจ้าของข้อมูลส่วนบุคคล หรือตามที่กฎหมายกำหนดไว้เท่านั้น"
        },
        {
            id: "data-disclosure",
            title: "5. การเปิดเผยข้อมูลส่วนบุคคล",
            content: "วว. จะไม่เปิดเผยข้อมูลส่วนบุคคล เว้นแต่เป็นการเปิดเผยตามวัตถุประสงค์ที่เจ้าของข้อมูลส่วนบุคคลได้ให้ไว้กับ วว. เช่น การปฏิบัติตามบริการที่เจ้าของข้อมูลส่วนบุคคลร้องขอ หรือเป็นไปตามภาระผูกพันตามสัญญา หรือตามที่กฎหมายกำหนดให้เปิดเผย รวมถึงในกรณีที่มีการร้องขอให้เปิดเผยข้อมูล โดยอาศัยอำนาจตามกฎหมาย เช่น การฟ้องร้อง หรือดำเนินคดีตามกฎหมาย กรณีใด ๆ ที่ วว. มีความจำเป็นต้องเปิดเผยข้อมูลส่วนบุคคลเพิ่มเติมหรือเปลี่ยนแปลงไปจากวัตถุประสงค์ที่เจ้าของข้อมูลได้ให้ไว้ วว. จะแจ้งให้เจ้าของข้อมูลส่วนบุคคลทราบก่อนที่จะดำเนินการกับข้อมูลส่วนบุคคลนั้น เว้นแต่เป็นกรณีที่กฎหมายกำหนดหรืออนุญาตให้ดำเนินการได้"
        },
        {
            id: "data-storage",
            title: "6. การเก็บรักษาข้อมูลส่วนบุคคล",
            content: "วว. จะทำการเก็บรักษาข้อมูลส่วนบุคคล ดังนี้",
            subsections: [
                {
                    id: "storage-format",
                    title: "",
                    content: "6.1 จัดเก็บในรูปแบบเอกสาร และ/หรือ ข้อมูลอิเล็กทรอนิกส์"
                },
                {
                    id: "storage-location",
                    title: "",
                    content: "6.2 จัดเก็บ ณ สถานที่ที่มีการจำกัดสิทธิ์การเข้าถึง / เก็บไว้ในเครื่องแม่ข่าย"
                },
                {
                    id: "retention-period",
                    title: "",
                    content: "6.3 ระยะเวลาเก็บข้อมูลส่วนบุคคล สถาบันจะจัดเก็บข้อมูลส่วนบุคคลไว้ตามระยะเวลาที่จำเป็น หรือ ตามระยะเวลาของสัญญา หรือตามที่กฎหมายกำหนดหรืออนุญาตไว้"
                },
                {
                    id: "data-deletion",
                    title: "",
                    content: "6.4 สถาบันจะลบหรือทำลายข้อมูลส่วนบุคคล หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุถึงตัวตนได้ เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาเก็บข้อมูลส่วนบุคคลข้างต้น"
                }
            ]
        },
        {
            id: "data-rights",
            title: "7. สิทธิของเจ้าของข้อมูลส่วนบุคคล",
            content: "เจ้าของข้อมูลส่วนบุคคลมีสิทธิในการดำเนินการ ดังต่อไปนี้",
            subsections: [
                {
                    id: "right-withdraw-consent",
                    title: "7.1 สิทธิในการเพิกถอนความยินยอม",
                    content: "ท่านมีสิทธิถอนความยินยอมเมื่อใดก็ได้ตลอดระยะเวลาที่ข้อมูลส่วนบุคคลของท่านถูกเก็บรักษาโดย วว. เว้นแต่มีข้อจำกัดสิทธิโดยกฎหมายให้วว. จำเป็นต้องเก็บรักษาข้อมูลต่อไปหรือยังคงมีสัญญาระหว่างท่านกับ วว. ที่ให้ประโยชน์แก่ท่านอยู่"
                },
                {
                    id: "right-access",
                    title: "7.2 สิทธิในการขอเข้าถึงข้อมูลส่วนบุคคล",
                    content: "ท่านมีสิทธิขอเข้าถึง รับสำเนาและขอให้เปิดเผยที่มาของข้อมูลส่วนบุคคลที่ วว. เก็บรวบรวมไว้โดยปราศจากความยินยอมของท่าน เว้นแต่กรณีที่ วว. มีสิทธิปฏิเสธคำขอของท่านด้วยเหตุตามกฎหมายหรือคำสั่งศาล หรือกรณีที่การใช้สิทธิของท่านจะมีผลกระทบที่อาจก่อให้เกิดความเสียหายต่อสิทธิและเสรีภาพของบุคคลอื่น"
                },
                {
                    id: "right-rectification",
                    title: "7.3 สิทธิในการขอแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง",
                    content: "ท่านมีสิทธิขอให้แก้ไขข้อมูลส่วนบุคคลเพื่อให้มีความถูกต้องเป็นปัจจุบัน สมบูรณ์และไม่ก่อให้เกิดความเข้าใจผิด"
                },
                {
                    id: "right-erasure",
                    title: "7.4 สิทธิในการลบหรือทำลายข้อมูลส่วนบุคคล",
                    content: "ท่านมีสิทธิขอให้ลบหรือทำลายข้อมูลส่วนบุคคลของท่าน หรือทำให้ข้อมูลส่วนบุคคลของท่านไม่สามารถระบุตัวบุคคลที่เป็นเจ้าของข้อมูลได้ในกรณีดังต่อไปนี้",
                    items: [
                        "(1) ข้อมูลของท่านหมดความจำเป็นต่อวัตถุประสงค์ของการประมวลผล",
                        "(2) เมื่อท่านได้ถอนความยินยอมและ วว. ไม่มีอำนาจตามกฎหมายที่จะทำการประมวลผลข้อมูลส่วนบุคคลดังกล่าวต่อไปได้",
                        "(3) เมื่อท่านได้คัดค้านการประมวลผลข้อมูลส่วนบุคคล",
                        "(4) เมื่อการประมวลผลข้อมูลส่วนบุคคลของท่านเป็นไปโดยไม่ชอบด้วยกฎหมาย"
                    ]
                },
                {
                    id: "right-restriction",
                    title: "7.5 สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคล",
                    content: "ท่านมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลของท่านได้ ในกรณีดังต่อไปนี้",
                    items: [
                        "(1) เมื่ออยู่ในระหว่างการตรวจสอบตามคำร้องขอของท่านให้แก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง สมบูรณ์และเป็นปัจจุบัน",
                        "(2) ข้อมูลส่วนบุคคลของท่านถูกเก็บรวบรวม ใช้หรือเปิดเผยโดยมิชอบด้วยกฎหมาย",
                        "(3) เมื่อข้อมูลส่วนบุคคลของท่านหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่ วว. ได้แจ้งในการเก็บรวบรวม แต่ท่านประสงค์ให้ วว. เก็บรักษาข้อมูลนั้นต่อไปเพื่อประกอบการใช้สิทธิตามกฎหมาย",
                        "(4) เมื่ออยู่ในระหว่างการตรวจสอบคำขอใช้สิทธิคัดค้านการประมวลผลข้อมูลส่วนบุคคล"
                    ]
                },
                {
                    id: "right-portability",
                    title: "7.6 สิทธิในการขอรับ ส่งหรือโอนข้อมูลส่วนบุคคล",
                    content: "ท่านมีสิทธิในการขอรับข้อมูลส่วนบุคคลของท่านในรูปแบบที่สามารถอ่านหรือใช้งานโดยทั่วไปได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติจาก วว. รวมถึงอาจขอให้วว. ส่งหรือโอนข้อมูลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลรายอื่น ทั้งนี้เฉพาะแต่ข้อมูลส่วนบุคคลที่ได้ถูกเก็บรวบรวมโดยใช้ฐานความยินยอม หรือฐานการปฏิบัติตามสัญญา หรือตามที่กฎหมายประกาศกำหนดเท่านั้น"
                },
                {
                    id: "right-object",
                    title: "7.7 สิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคล",
                    content: "ท่านมีสิทธิคัดค้านการประมวลผลข้อมูลส่วนบุคคลที่เกี่ยวกับท่าน เว้นแต่กรณีที่ วว. มีเหตุในการปฏิเสธคำขอโดยชอบด้วยกฎหมาย"
                }
            ]
        },
        {
            id: "security",
            title: "8. การรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล",
            content: "วว. จัดให้มีมาตรการการรักษาความมั่นคงปลอดภัยที่เหมาะสม เพื่อป้องกันการเข้าถึง การใช้การเปลี่ยนแปลงการแก้ไข หรือการเปิดเผยข้อมูลส่วนบุคคลโดยปราศจากอำนาจหรือโดยมิชอบ นอกจากนี้วว. ได้กำหนดแนวปฏิบัติภายใน วว. เพื่อกำหนดสิทธิในการเข้าถึงหรือการใช้ข้อมูลส่วนบุคคลของเจ้าของข้อมูลส่วนบุคคล เพื่อรักษาความลับและความปลอดภัยของข้อมูล และ วว. จะจัดให้มีการทบทวนมาตรการดังกล่าวเป็นระยะเพื่อความเหมาะสม"
        },
        {
            id: "cookies",
            title: "9. การใช้คุกกี้ (Cookies)",
            content: "วว. เก็บรวบรวมและใช้คุกกี้(Cookies) ในเว็บไซต์ที่อยู่ภายใต้ความดูแลของ วว. เช่น www.tistr.or.th หรือบนอุปกรณ์ของท่านตามแต่บริการที่ท่านใช้งาน ทั้งนี้เพื่อการดำเนินการด้านความปลอดภัยในการให้บริการของ วว. และเพื่อให้ท่านซึ่งเป็นผู้ใช้งานได้รับความสะดวกและประสบการณ์ที่ดีในการใช้งานบริการของ วว. และข้อมูลเหล่านี้จะถูกนำไปเพื่อปรับปรุงเว็บไซต์ของ วว. ให้ตรงกับความต้องการของท่านมากยิ่งขึ้น ซึ่งท่านสามารถที่จะยอมรับหรือไม่ยอมรับคุกกี้(Cookies) ก็ได้ในกรณีที่เลือกจะไม่รับหรือลบคุกกี้(Cookies) เว็บไซต์อาจจะไม่สามารถให้บริการหรือไม่สามารถแสดงผลได้อย่างถูกต้อง"
        },
        {
            id: "complaints",
            title: "10. การร้องเรียนต่อหน่วยงานผู้มีอำนาจกำกับดูแล",
            content: "ในกรณีที่ท่านพบว่า วว. มิได้ปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ท่านมีสิทธิร้องเรียนไปยังคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล หรือหน่วยงานที่มีอำนาจกำกับดูแลที่ได้รับการแต่งตั้งโดยคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลหรือตามกฎหมาย ทั้งนี้ก่อนการร้องเรียนดังกล่าว วว. ขอให้ท่านโปรดติดต่อมายัง วว. เพื่อให้วว. มีโอกาสได้รับทราบข้อเท็จจริงและได้ชี้แจงในประเด็นต่าง ๆ รวมถึงจัดการแก้ไขข้อกังวลของท่านก่อนในโอกาสแรก"
        },
        {
            id: "dpo",
            title: "11. เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล",
            content: "วว. ได้แต่งตั้งเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลเพื่อทำหน้าที่ตรวจสอบ กำกับและให้คำแนะนำในการเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงการประสานงานและให้ความร่วมมือกับสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล เพื่อให้สอดคล้องตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562"
        },
        {
            id: "policy-updates",
            title: "12. การปรับปรุงแก้ไขนโยบายการคุ้มครองข้อมูลส่วนบุคคล",
            content: "วว. อาจทำการปรับปรุง แก้ไขหรือเปลี่ยนแปลงนโยบายนี้ตามที่เห็นสมควร โดยมิต้องแจ้งให้เจ้าของข้อมูลส่วนบุคคลทราบล่วงหน้า เพื่อความเหมาะสมและมีประสิทธิภาพในการให้บริการ ดังนั้น วว. จึงขอแนะนำให้ท่านอ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคลทุกครั้งที่เยี่ยมชมหรือใช้บริการจาก วว. หรือ บนเว็บไซต์ของ วว."
        },
        {
            id: "contact",
            title: "13. การติดต่อสอบถามหรือใช้สิทธิ",
            content: "หากท่านมีข้อสงสัย ข้อเสนอแนะหรือข้อกังวลเกี่ยวกับการเก็บรวบรวม ใช้และเปิดเผยข้อมูลส่วนบุคคลของ วว. หรือเกี่ยวกับนโยบายนี้หรือท่านต้องการใช้สิทธิตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล ท่านสามารถติดต่อสอบถามได้ที่",
            subsections: [
                {
                    id: "contact-address",
                    title: "",
                    content: "สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย (วว.)\n35 เทคโนธานี หมู่ 3 ตำบลคลองห้า อำเภอคลองหลวง จังหวัดปทุมธานี 12120\nCall Center: 02-577-9300"
                },
                {
                    id: "contact-dpo",
                    title: "เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (Data Protection Officer)",
                    content: "Email: DPO@tistr.or.th\nWebsite ของ วว.: www.tistr.or.th"
                }
            ]
        }
    ]
};



export const microbialCenterPolicyTH: PolicyData = {
    title: "นโยบายและเงื่อนไขการให้บริการศูนย์รับฝากจุลินทรีย์",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย (วว.) โดยศูนย์จุลินทรีย์ (TISTR Culture Collection) มีภารกิจในการดำเนินงานวิจัย พัฒนา และบริหารด้านจุลินทรีย์ เพื่อการอนุรักษ์และการใช้ประโยชน์ทรัพยากรจุลินทรีย์อย่างยั่งยืนดังนั้น เพื่อให้การดำเนินการของศูนย์จุลินทรีย์ เกิดความรัดกุม มีประสิทธิภาพ และเป็นแนวทางปฏิบัติเดียวกัน สร้างความเชื่อมั่นแก่ผู้ใช้บริการ สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย (วว.) จึงออกนโยบายและเงื่อนไขการให้บริการศูนย์รับฝากจุลินทรีย์ไว้ ดังนี้"
        },
        {
            id: "deposit-types",
            title: "1. การรับฝากเก็บของศูนย์จุลินทรีย์ วว.",
            content: "ประกอบไปด้วย",
            subsections: [
                {
                    id: "microorganisms",
                    title: "1.1 จุลินทรีย์ (Microorganisms)",
                    content: ""
                },
                {
                    id: "biomaterials",
                    title: "1.2 ชีววัตถุ (Biomaterials)",
                    content: ""
                }
            ]
        },
        {
            id: "deposit-options",
            title: "2. รูปแบบการฝาก",
            content: "ผู้ฝากสามารถเลือกฝากจุลินทรีย์และ/หรือชีววัตถุได้ตามรูปแบบการฝากแบบต่าง ๆ โดยต้องปฏิบัติตามหลักเกณฑ์และเงื่อนไขการฝากเก็บ ดังนี้",
            subsections: [
                {
                    id: "public-deposit",
                    title: "2.1 ฝากเก็บแบบเผยแพร่แก่สาธารณะ (Public deposit)",
                    content: ""
                },
                {
                    id: "conditional-public-deposit",
                    title: "2.2 ฝากเก็บแบบเผยแพร่แก่สาธารณะแบบมีเงื่อนไข (Conditional public deposit)",
                    content: ""
                },
                {
                    id: "safe-deposit",
                    title: "2.3 ฝากเก็บแบบไม่เผยแพร่ (Safe deposit)",
                    content: ""
                },
                {
                    id: "patent-deposit",
                    title: "2.4 ฝากเก็บเพื่อการยื่นขอจดสิทธิบัตร (Patent deposit)",
                    content: ""
                }
            ]
        },
        {
            id: "procedures",
            title: "3. วิธีการและขั้นตอนการฝากเก็บ",
            content: "วิธีการและขั้นตอนการฝากเก็บจุลินทรีย์ และ/หรือ ชีววัตถุ ให้เป็นไปตามระเบียบ ขั้นตอน และแนวทางปฏิบัติที่ศูนย์จุลินทรีย์ วว. กำหนดไว้"
        },
        {
            id: "source-requirements",
            title: "4. ข้อกำหนดเกี่ยวกับแหล่งที่มา",
            content: "ศูนย์จุลินทรีย์ วว. จะรับฝากเก็บเฉพาะในกรณีที่จุลินทรีย์ และ/หรือ ชีววัตถุ สามารถระบุประเทศแหล่งที่มาได้ กล่าวคือ ศูนย์จุลินทรีย์ วว. และผู้ฝากต้องปฏิบัติตามกฎหมาย ระเบียบที่เกี่ยวข้องกับจุลินทรีย์ และ/หรือ ชีววัตถุของประเทศไทย และต้องตระหนักถึงอนุสัญญาว่าด้วยความหลากหลายทางชีวภาพ พิธีสารนาโงยา และ พิธีสารอื่น ๆ ที่มีความเกี่ยวข้อง"
        },
        {
            id: "disclaimers",
            title: "5. ข้อสงวนสิทธิ",
            content: "",
            subsections: [
                {
                    id: "compliance-disclaimer",
                    title: "",
                    content: "5.1ศูนย์จุลินทรีย์ วว. ไม่รับผิดชอบต่อความเสียหายหรือการเกิดข้อพิพาทใด ๆ จากกรณีที่ผู้ฝากไม่ปฏิบัติตามข้อกำหนดที่ให้ไว้ กฎหมายและ/หรือกฎข้อบังคับต่างๆ"
                },
                {
                    id: "dispute-disclaimer",
                    title: "",
                    content: "5.2กรณีที่มีบุคคลภายนอกโต้แย้งหรือเรียกร้องอ้างความเป็นเจ้าของสิทธิในจุลินทรีย์หรือชีววัตถุว่ามีการละเมิดสิทธิต่อบุคคลภายนอก ผู้ฝากต้องดำเนินการทั้งปวงเพื่อให้การโต้แย้งหรือการเรียกร้องดังกล่าวระงับสิ้นไปโดยเร็ว"
                },
                {
                    id: "force-majeure-disclaimer",
                    title: "",
                    content: "5.3ศูนย์จุลินทรีย์ วว. ไม่รับผิดชอบต่อความเสียหาย การสูญหาย การเสียสภาพ การกลายพันธุ์ หรือการไม่รอดชีวิตของจุลินทรีย์ และ/หรือ ชีววัตถุ อันเนื่องมาจากสาเหตุที่อยู่นอกเหนือการควบคุมของศูนย์จุลินทรีย์ วว. หรือ จากเหตุภัยพิบัติ อัคคีภัย อุทกภัย การเกิดการจลาจล สงคราม ประท้วง การโจรกรรม รวมถึงเหตุอันสุดวิสัยอื่น ๆ"
                },
                {
                    id: "refund-disclaimer",
                    title: "",
                    content: "5.4ขอสงวนสิทธิในการไม่คืนค่าบริการในทุกกรณี"
                },
                {
                    id: "termination-rights",
                    title: "",
                    content: "5.5 ศูนย์จุลินทรีย์ วว. มีสิทธิยกเลิกการให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการได้ทันที โดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า ถ้าปรากฏว่าผู้ใช้บริการปฏิบัติผิดเงื่อนไขข้อตกลงนี้แม้ข้อใดข้อหนึ่ง หรือมีเหตุที่ วว. สามารถยกเลิกให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการได้ตามกฎหมาย"
                }
            ]
        },
        {
            id: "deposit-conditions",
            title: "6. เงื่อนไขการฝากเก็บจุลินทรีย์และ/หรือ ชีววัตถุ",
            content: "",
            subsections: [
                {
                    id: "public-deposit-conditions",
                    title: "6.1 ฝากแบบเผยแพร่แก่สาธารณะ (Public deposit)",
                    content: "",
                    items: [
                        "6.1.1 รับฝากจุลินทรีย์และ/หรือ ชีววัตถุ แบคทีเรีย ยีสต์และราที่มีระดับความเสี่ยงที่ทำให้เกิดโรคหรืออันตรายในระดับกลุ่มความเสี่ยงที่ 1 หรือ 2 (Risk Group 1 หรือ 2) เท่านั้น",
                        "6.1.2 รับฝากเก็บในกรณีที่สามารถทำการเก็บรักษาด้วยวิธีการแช่แข็งหรือระเหิดแห้ง (Lyophilization) ได้เท่านั้น",
                        "6.1.3 จุลินทรีย์ และ/หรือ ชีววัตถุ จะได้รับการจัดการตามวิธีการของศูนย์จุลินทรีย์ วว. และถูกเก็บรักษาด้วยวิธีการที่เหมาะสม ทั้งนี้ขึ้นกับชนิดของจุลินทรีย์",
                        "6.1.4 ผู้ฝากพิจารณาแบ่งปันผลประโยชน์ทางการค้า และ/หรือ โอนสิทธิ์ในการเป็นเจ้าของจุลินทรีย์ กับศูนย์จุลินทรีย์ วว. ทั้งนี้แล้วแต่กรณีขึ้นอยู่กับความต้องการของผู้ฝาก โดยจะต้องจัดทำเอกสารหรือสัญญาระหว่างศูนย์จุลินทรีย์ วว. กับผู้ฝาก",
                        "6.1.5 ผู้ฝากอนุญาตให้ศูนย์จุลินทรีย์ วว. สามารถนำสายพันธุ์ และ/หรือ ชีววัตถุ ไปใช้ประโยชน์ในงานวิจัย และ/หรือให้บริการแก่สาธารณะ ในราคาที่ทางศูนย์จุลินทรีย์เป็นผู้กำหนดได้",
                        "6.1.6 ศูนย์จุลินทรีย์ วว. จะดำเนินการให้บริการแก่ผู้ฝากภายใต้ข้อตกลงในการให้บริการสายพันธุ์จุลินทรีย์ วว. (Material Transfer Agreement)",
                        "6.1.7 ผู้ฝากไม่เสียค่าบริการใดๆ"
                    ]
                },
                {
                    id: "conditional-deposit-conditions",
                    title: "6.2 ฝากแบบเผยแพร่แก่สาธารณะแบบมีเงื่อนไข (Conditional deposit) เพื่อการตีพิมพ์ในผลงานวิจัย",
                    content: "",
                    items: [
                        "6.2.1 รับฝากจุลินทรีย์ (แบคทีเรีย ยีสต์ และรา)และ/หรือ ชีววัตถุ ที่มีระดับความเสี่ยงที่ทำให้เกิดโรคหรืออันตรายในระดับกลุ่มความเสี่ยงที่ 1 หรือ 2(Risk Group 1 หรือ 2) เท่านั้น",
                        "6.2.2 รับฝากโดยการเก็บรักษาด้วยวิธีการแช่แข็ง หรือระเหิดแห้งได้เท่านั้น",
                        "6.2.3 จุลินทรีย์ และ/หรือ ชีววัตถุ จะได้รับการจัดการตามวิธีการของศูนย์จุลินทรีย์ วว. และถูกเก็บรักษาด้วยวิธีการที่เหมาะสม ทั้งนี้ขึ้นกับชนิดของจุลินทรีย์",
                        "6.2.4 จุลินทรีย์ และ/หรือ ชีววัตถุจะถูกเก็บรักษาแบบไม่เผยแพร่จนกว่าเอกสารจะถูกตีพิมพ์นับจากวันที่ลูกค้ากำหนด เป็นระยะเวลาไม่เกิน 2 ปี โดยไม่เสียค่าบริการ"
                    ]
                },
                {
                    id: "safe-deposit-conditions",
                    title: "6.3 ฝากเก็บแบบไม่เผยแพร่ (Safe deposit)",
                    content: "",
                    items: [
                        "6.3.1 รับฝากจุลินทรีย์ (แบคทีเรีย ยีสต์ และรา) และ/หรือ ชีววัตถุ ที่มีระดับความเสี่ยงที่ทำให้เกิดโรคหรืออันตรายในระดับกลุ่มความเสี่ยงที่ 1 หรือ 2 (Risk Group 1 หรือ 2) เท่านั้น",
                        "6.3.2 รับฝากโดยการเก็บรักษาด้วยวิธีการแช่แข็ง หรือระเหิดแห้งได้เท่านั้น",
                        "6.3.3 จุลินทรีย์ และ/หรือ ชีววัตถุ จะได้รับการจัดการตามวิธีการของศูนย์จุลินทรีย์ วว. และถูกเก็บรักษาด้วยวิธีการที่เหมาะสม ทั้งนี้ขึ้นกับชนิดของจุลินทรีย์",
                        "6.3.4 จุลินทรีย์และ/หรือ ชีววัตถุ และข้อมูลของจุลินทรีย์ และ/หรือชีววัตถุ จะถูกเก็บรักษาแบบไม่เผยแพร่",
                        "6.3.5 ผู้ฝากชำระค่าบริการตามที่ศูนย์จุลินทรีย์ วว. กำหนด",
                        "6.3.6 ศูนย์จุลินทรีย์ วว. พิจารณาตรวจสอบความถูกต้องจุลินทรีย์ และ/หรือ ชีววัตถุ และการรอดชีวิตของจุลินทรีย์ ซึ่งในกรณีหากตรวจสอบแล้วจุลินทรีย์ที่นำฝากไม่รอดชีวิต ผู้ฝากต้องนำส่งจุลินทรีย์ชุดใหม่แทน"
                    ]
                },
                {
                    id: "patent-deposit-conditions",
                    title: "6.4 ฝากเก็บเพื่อการยื่นขอจดสิทธิบัตร/อนุสิทธิบัตร (Patent/Petty patent deposit)",
                    content: "",
                    items: [
                        "6.4.1 รับฝากจุลินทรีย์เฉพาะแบคทีเรีย ยีสต์ และราและ/หรือ ชีววัตถุ ที่มีระดับความเสี่ยงที่ทำให้เกิดโรคหรืออันตรายในระดับกลุ่มความเสี่ยงที่ 1 หรือ 2 (Risk Group 1 หรือ 2)เท่านั้น",
                        "6.4.2 รับฝากโดยการเก็บรักษาด้วยวิธีการแช่แข็ง หรือระเหิดแห้งได้เท่านั้น",
                        "6.4.3 จุลินทรีย์ และ/หรือ ชีววัตถุ จะได้รับการจัดการตามวิธีการของศูนย์จุลินทรีย์ วว. และถูกเก็บรักษาด้วยวิธีการที่เหมาะสม ทั้งนี้ขึ้นกับชนิดของจุลินทรีย์",
                        "6.4.4 จุลินทรีย์และ/หรือ ชีววัตถุ และข้อมูลของจุลินทรีย์ และ/หรือชีววัตถุจะถูกเก็บรักษาแบบไม่เผยแพร่",
                        "6.4.5 ผู้ฝากต้องยื่นเอกสารแบบพิมพ์คำขอรับสิทธิบัตร/อนุสิทธิบัตรหรือสำเนาให้แก่ศูนย์จุลินทรีย์ วว.",
                        "6.4.6 ผู้ฝากชำระค่าบริการตามที่ศูนย์จุลินทรีย์ วว. กำหนด",
                        "6.4.7 ศูนย์จุลินทรีย์ วว. พิจารณาตรวจสอบความถูกต้องจุลินทรีย์ และ/หรือ ชีววัตถุ และการรอดชีวิตของจุลินทรีย์ ซึ่งในกรณีหากตรวจสอบแล้วจุลินทรีย์ที่นำฝากไม่รอดชีวิต ผู้ฝากต้องนำส่งจุลินทรีย์ชุดใหม่แทน",
                        "6.4.8 ศูนย์จุลินทรีย์ วว. ออกหนังสือรับรองการฝากเก็บจุลินทรีย์ และ/หรือ ชีววัตถุ เพื่อให้ผู้ฝากใช้ในการยื่นจดสิทธิบัตร/อนุสิทธิบัตร กับกรมทรัพย์สินทางปัญญา กระทรวงพาณิชย์",
                        "6.4.9 หากได้รับการจดสิทธิบัตร/อนุสิทธิบัตร ผู้ฝากต้องชำระค่าบริการตามระยะเวลาความคุ้มครองของสิทธิบัตรหรืออนุสิทธิบัตร แต่หากไม่ได้รับการจดสิทธิบัตร/อนุสิทธิบัตรผู้ฝากสามารถขอเปลี่ยนแปลงการฝากเก็บเป็นแบบ safe deposit หรือกรณีอื่นๆ ได้ แล้วแต่ตกลงกับศูนย์จุลินทรีย์ วว."
                    ]
                }
            ]
        }
    ]
};

export const serviceAgreementPolicyTH: PolicyData = {
    title: "ข้อตกลงการให้บริการฝากเก็บสายพันธุ์จุลินทรีย์ และ/หรือชีววัตถุ",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "ข้อตกลงการให้บริการนี้ใช้บังคับระหว่าง สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย (วว.) โดยศูนย์จุลินทรีย์ วว. (TISTR Culture Collection) กับ ผู้ใช้บริการ โดยผู้ใช้บริการตกลงยินยอมผูกพันและปฏิบัติตามข้อตกลงและเงื่อนไขดังนี้\n\nโดยที่ ทรัพยากรพันธุกรรม (MATERIAL) หมายถึง สายพันธุ์จุลินทรีย์/จุลินทรีย์กลายพันธุ์ สารพันธุกรรม อนุพันธ์ พลาสมิด หรือ อื่นๆ ทรัพยากรพันธุกรรม (MATERIAL) ครอบคลุมถึงทั้งที่มีชีวิต ไม่มีชีวิต ที่สามารถระบุประเทศแหล่งที่มาได้ผู้ใช้บริการทรัพยากรพันธุกรรมต้องปฏิบัติตามเงื่อนไขดังต่อไปนี้"
        },
        {
            id: "specific-conditions",
            title: "1. เงื่อนไขเฉพาะ",
            content: "",
            subsections: [
                {
                    id: "material-requirements",
                    title: "",
                    content: "1.1 ทรัพยากรพันธุกรรมที่สามารถนำมาใช้กับบริการนี้ต้องเป็นจุลินทรีย์ (แบคทีเรีย ยีสต์ และรา) และ/หรือ ชีววัตถุ ที่มีระดับความเสี่ยงที่ทำให้เกิดโรคหรืออันตรายในระดับกลุ่มความเสี่ยงที่ 1 หรือ 2 (Risk Group 1 หรือ 2) เท่านั้น"
                },
                {
                    id: "storage-method",
                    title: "",
                    content: "1.2 บริการนี้เป็นการฝากเก็บรักษาด้วยวิธีการแช่แข็งหรือระเหิดแห้ง (Lyophilization) เท่านั้น"
                },
                {
                    id: "handling-procedure",
                    title: "",
                    content: "1.3 จุลินทรีย์ และ/หรือ ชีววัตถุ จะได้รับการจัดการตามวิธีการของศูนย์จุลินทรีย์ วว. และถูกเก็บรักษาด้วยวิธีการที่เหมาะสม ทั้งนี้ขึ้นกับชนิดของจุลินทรีย์"
                }
            ]
        },
        {
            id: "general-conditions",
            title: "2. เงื่อนไขทั่วไป",
            content: "",
            subsections: [
                {
                    id: "compliance-liability",
                    title: "",
                    content: "2.1 ศูนย์จุลินทรีย์ วว. ไม่รับผิดชอบต่อความเสียหายหรือการเกิดข้อพิพาทใด ๆ จากกรณีที่ผู้ฝากไม่ปฏิบัติตามข้อกำหนดที่ให้ไว้ กฎหมายและ/หรือกฎข้อบังคับต่าง ๆ"
                },
                {
                    id: "dispute-resolution",
                    title: "",
                    content: "2.2 กรณีที่มีบุคคลภายนอกโต้แย้งหรือเรียกร้องอ้างความเป็นเจ้าของสิทธิในจุลินทรีย์ และ/หรือชีววัตถุว่ามีการละเมิดสิทธิต่อบุคคลภายนอก ผู้ฝากต้องดำเนินการทั้งปวงเพื่อให้การโต้แย้งหรือการเรียกร้องดังกล่าวระงับสิ้นไปโดยเร็ว"
                },
                {
                    id: "force-majeure",
                    title: "",
                    content: "2.3 ศูนย์จุลินทรีย์ วว. ไม่รับผิดชอบต่อความเสียหาย การสูญหาย การเสียสภาพ การกลายพันธุ์ หรือการไม่รอดชีวิตของจุลินทรีย์ และ/หรือ ชีววัตถุ อันเนื่องมาจากสาเหตุที่อยู่นอกเหนือการควบคุมของศูนย์จุลินทรีย์ วว. หรือ จากเหตุภัยพิบัติ อัคคีภัย อุทกภัย การเกิดการจลาจล สงคราม ประท้วง การโจรกรรม รวมถึงเหตุอันสุดวิสัยอื่น ๆ"
                },
                {
                    id: "no-refund",
                    title: "",
                    content: "2.4 ขอสงวนสิทธิในการไม่คืนค่าบริการในทุกกรณี"
                },
                {
                    id: "service-termination",
                    title: "",
                    content: "2.5 ศูนย์จุลินทรีย์ วว. มีสิทธิยกเลิกการให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการได้ทันที โดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า ถ้าปรากฏว่าผู้ใช้บริการปฏิบัติผิดเงื่อนไขข้อตกลงนี้แม้ข้อใดข้อหนึ่ง หรือมีเหตุที่ วว. สามารถยกเลิกให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการได้ตามกฎหมาย"
                },
                {
                    id: "legal-compliance",
                    title: "",
                    content: "2.6 ผู้ใช้บริการจะต้องปฏิบัติให้เป็นไปตามกฎหมายว่าด้วยที่เกี่ยวข้องกับการทรัพยากรพันธุกรรม และพันธกรณีที่ประเทศไทยได้เข้าร่วมเป็นภาคีที่มีอยู่ ณ ปัจจุบัน และในอนาคต และต้องปฏิบัติให้เป็นไปตามนโยบายและเงื่อนไขการให้บริการศูนย์รับฝากจุลินทรีย์ กฎระเบียบ ข้อคับ ตลอดจนแนวทางปฏิบัติของ วว. ที่มีอยู่ ณ ปัจจุบันและในอนาคต ทั้งนี้ หาก วว. พบว่าผู้ใช้บริการ ไม่ปฏิบัติให้เป็นตามเงื่อนไขดังกล่าว วว. ขอสงวนสิทธิ์ในการระงับให้บริการหรือยกเลิกการให้บริการ"
                },
                {
                    id: "termination-rights",
                    title: "",
                    content: "2.7 วว. มีสิทธิยกเลิกการให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการได้ทันที โดยไม่ต้องแจ้งให้ผู้ใช้บริการทราบล่วงหน้า ถ้าปรากฏว่าผู้ใช้บริการปฏิบัติผิดเงื่อนไขข้อตกลงนี้แม้ข้อใดข้อหนึ่ง หรือมีเหตุที่ วว. สามารถยกเลิกให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการได้ตามกฎหมาย"
                },
                {
                    id: "termination-terms",
                    title: "",
                    content: "2.8 กรณีมีการยกเลิกให้บริการ หรือยกเลิกข้อตกลงและเงื่อนไขการให้บริการ ไม่ว่ากรณีใด ๆ ผู้ใช้บริการตกลงที่ไม่เรียกร้องค่าเสียหายใด (ถ้ามี) และค่าใช้บริการที่ได้ชำระไว้แล้วคืนจาก วว. ทั้งสิ้น"
                }
            ]
        }
    ]
};

export const privacyPolicyEN: PolicyData = {
    title: "Privacy Policy",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "Thailand Institute of Scientific and Technological Research (\"TISTR\") recognizes the importance of protecting personal data and other information relating to you (collectively referred to as \"data\") so that you can be confident that TISTR has transparency and responsibility in collecting, gathering, using or disclosing your data in accordance with the Personal Data Protection Act B.E. 2562 (\"Personal Data Protection Law\") as well as other related laws.\n\nTISTR has therefore established this personal data protection policy to communicate to executives, employees, contractors, and external service providers of the institute to acknowledge and implement, to ensure that personal data received by the institute will be used according to needs and correctly according to law as follows:"
        },
        {
            id: "scope",
            title: "1. Policy Scope",
            content: "This policy applies to personal data of individuals who have relationships with TISTR currently and may have in the future, whose personal data is processed by TISTR officials, contract employees, business units or other forms of units operated by TISTR, and including partners or external parties who process personal data on behalf of or in the name of TISTR (\"Personal Data Processor\") under various products and services such as website systems, applications, documents or other forms of services controlled and managed by TISTR (collectively referred to as \"Services\")"
        },
        {
            id: "definitions",
            title: "2. Definitions",
            content: "",
            subsections: [
                {
                    id: "personal-data",
                    title: "2.1 Personal Data",
                    content: "Means data about a person which enables the identification of that person, whether directly or indirectly, but does not include data of deceased persons in particular"
                },
                {
                    id: "sensitive-data",
                    title: "2.2 Sensitive Personal Data",
                    content: "Means data that is truly personal to an individual, but is sensitive and may be at risk of unfair discrimination, such as race, ethnicity, political opinions, beliefs in cults, religion or philosophy, sexual behavior, criminal history, health information, disability, trade union information, genetic information, biometric data, or any other data that affects the personal data owner in a similar manner as announced by the Personal Data Protection Committee"
                },
                {
                    id: "data-owner",
                    title: "2.3 Personal Data Owner",
                    content: "Means the individual who owns that personal data, but not in cases where a person owns data or is the creator or collector of that data themselves. This personal data owner refers to natural persons only and does not include \"legal entities\" established under law such as companies, associations, foundations, or other organizations"
                },
                {
                    id: "data-controller",
                    title: "2.4 Personal Data Controller",
                    content: "Means a person or legal entity who has the authority and duty to make decisions regarding the collection, use, or disclosure of personal data"
                },
                {
                    id: "data-processor",
                    title: "2.5 Personal Data Processor",
                    content: "Means a person or legal entity who operates regarding the collection, use, or disclosure of personal data according to instructions or on behalf of the personal data controller, provided that such person or legal entity is not a personal data controller"
                }
            ]
        },
        {
            id: "data-sources",
            title: "3. Sources of Personal Data Collected by TISTR",
            content: "TISTR collects or obtains various types of personal data from the following data sources:",
            subsections: [
                {
                    id: "direct-collection",
                    title: "",
                    content: "3.1 Personal data that TISTR collects directly from personal data owners through various service channels such as application processes, registration, job applications, contract signing, documents, surveys, or use of products and services, or other service channels controlled and managed by TISTR.\n\nOr when personal data owners contact and communicate with TISTR at offices or through other contact channels controlled and managed by TISTR, etc."
                },
                {
                    id: "website-collection",
                    title: "",
                    content: "3.2 Data that TISTR collects from personal data owners' use of websites, products, or other services\n\nAccording to contracts or missions"
                },
                {
                    id: "third-party-collection",
                    title: "",
                    content: "3.3 Personal data that TISTR collects from other sources, where such data sources have authority, legitimate reasons under law, or have received consent from personal data owners to disclose data to TISTR, including from necessity to provide services under contracts that may involve exchange of personal data with partner agencies"
                }
            ]
        },
        {
            id: "processing-purposes",
            title: "4. Purposes of Personal Data Processing",
            content: "TISTR will collect, use or disclose your personal data for the purposes of TISTR's operations, research and education, service provision, contact and coordination, information provision, public relations, as well as database creation, opinion surveys in TISTR's affairs or activities to improve work quality for greater efficiency, under the purposes of TISTR's operations and/or as required by law. TISTR will store and use such data for the period necessary according to the purposes notified to personal data owners or as required by law only."
        },
        {
            id: "data-disclosure",
            title: "5. Personal Data Disclosure",
            content: "TISTR will not disclose personal data except for disclosure according to purposes that personal data owners have provided to TISTR, such as compliance with services requested by personal data owners, or in accordance with contractual obligations, or as required by law to disclose, including in cases where there are requests to disclose data by exercising legal authority, such as lawsuits or legal proceedings. In any case where TISTR needs to disclose additional personal data or change from the purposes that data owners have provided, TISTR will notify personal data owners before proceeding with that personal data, except in cases where law requires or permits such action."
        },
        {
            id: "data-storage",
            title: "6. Personal Data Storage",
            content: "TISTR will store personal data as follows:",
            subsections: [
                {
                    id: "storage-format",
                    title: "",
                    content: "6.1 Store in document format and/or electronic data"
                },
                {
                    id: "storage-location",
                    title: "",
                    content: "6.2 Store at locations with restricted access rights / stored on servers"
                },
                {
                    id: "retention-period",
                    title: "",
                    content: "6.3 Personal data retention period. The institute will store personal data for the necessary period, or according to contract periods, or as required or permitted by law"
                },
                {
                    id: "data-deletion",
                    title: "",
                    content: "6.4 The institute will delete or destroy personal data or make it data that cannot identify individuals when necessity ends or the personal data retention period above expires"
                }
            ]
        },
        {
            id: "data-rights",
            title: "7. Rights of Personal Data Owners",
            content: "Personal data owners have the right to take the following actions:",
            subsections: [
                {
                    id: "right-withdraw-consent",
                    title: "7.1 Right to Withdraw Consent",
                    content: "You have the right to withdraw consent at any time throughout the period that your personal data is stored by TISTR, except where there are legal restrictions requiring TISTR to continue storing data or there are still contracts between you and TISTR that benefit you"
                },
                {
                    id: "right-access",
                    title: "7.2 Right to Access Personal Data",
                    content: "You have the right to request access, receive copies, and request disclosure of sources of personal data that TISTR has collected without your consent, except in cases where TISTR has the right to refuse your request for legal reasons or court orders, or cases where your exercise of rights would have effects that might cause damage to the rights and freedoms of others"
                },
                {
                    id: "right-rectification",
                    title: "7.3 Right to Correct Personal Data",
                    content: "You have the right to request correction of personal data to ensure accuracy, currency, completeness, and not cause misunderstanding"
                },
                {
                    id: "right-erasure",
                    title: "7.4 Right to Delete or Destroy Personal Data",
                    content: "You have the right to request deletion or destruction of your personal data, or make your personal data unable to identify the person who owns the data in the following cases:",
                    items: [
                        "(1) Your data is no longer necessary for the purposes of processing",
                        "(2) When you have withdrawn consent and TISTR has no legal authority to continue processing such personal data",
                        "(3) When you have objected to personal data processing",
                        "(4) When your personal data processing is unlawful"
                    ]
                },
                {
                    id: "right-restriction",
                    title: "7.5 Right to Restrict Use of Personal Data",
                    content: "You have the right to request restriction of use of your personal data in the following cases:",
                    items: [
                        "(1) During verification according to your request to correct personal data for accuracy, completeness, and currency",
                        "(2) Your personal data has been collected, used, or disclosed unlawfully",
                        "(3) When your personal data is no longer necessary to be retained according to the purposes TISTR notified in collection, but you wish TISTR to retain such data for exercising legal rights",
                        "(4) During verification of requests to exercise the right to object to personal data processing"
                    ]
                },
                {
                    id: "right-portability",
                    title: "7.6 Right to Receive, Send, or Transfer Personal Data",
                    content: "You have the right to request to receive your personal data in a format that can be read or used generally by tools or devices that work automatically from TISTR, including possibly requesting TISTR to send or transfer data in such format to other personal data controllers, but only for personal data that has been collected using consent basis, or contract performance basis, or as announced by law"
                },
                {
                    id: "right-object",
                    title: "7.7 Right to Object to Personal Data Processing",
                    content: "You have the right to object to processing of personal data relating to you, except in cases where TISTR has legitimate grounds to refuse the request under law"
                }
            ]
        },
        {
            id: "security",
            title: "8. Personal Data Security",
            content: "TISTR provides appropriate security measures to prevent unauthorized or unlawful access, use, modification, correction, or disclosure of personal data. In addition, TISTR has established internal guidelines to determine rights to access or use personal data of personal data owners to maintain confidentiality and data security, and TISTR will periodically review such measures for appropriateness."
        },
        {
            id: "cookies",
            title: "9. Use of Cookies",
            content: "TISTR collects and uses cookies on websites under TISTR's care such as www.tistr.or.th or on your devices according to the services you use, for security operations in TISTR's service provision and to provide you as users with convenience and good experience in using TISTR's services, and this data will be used to improve TISTR's website to better meet your needs. You can choose to accept or not accept cookies. In case you choose not to accept or delete cookies, the website may not be able to provide services or display correctly."
        },
        {
            id: "complaints",
            title: "10. Complaints to Supervisory Authorities",
            content: "In case you find that TISTR has not complied with personal data protection law, you have the right to complain to the Personal Data Protection Committee or supervisory agencies appointed by the Personal Data Protection Committee or according to law. Before such complaints, TISTR asks you to please contact TISTR so that TISTR has the opportunity to acknowledge facts and clarify various issues, including managing to resolve your concerns first at the earliest opportunity."
        },
        {
            id: "dpo",
            title: "11. Data Protection Officer",
            content: "TISTR has appointed a data protection officer to perform duties of monitoring, supervising, and providing advice on collection, use, or disclosure of personal data, including coordination and cooperation with the Office of the Personal Data Protection Committee to comply with the Personal Data Protection Act B.E. 2562"
        },
        {
            id: "policy-updates",
            title: "12. Updates to Personal Data Protection Policy",
            content: "TISTR may update, revise, or change this policy as deemed appropriate without prior notice to personal data owners for appropriateness and efficiency in service provision. Therefore, TISTR recommends that you read the personal data protection policy every time you visit or use services from TISTR or on TISTR's website."
        },
        {
            id: "contact",
            title: "13. Contact for Inquiries or Rights Exercise",
            content: "If you have questions, suggestions, or concerns about TISTR's collection, use, and disclosure of personal data, or about this policy, or you wish to exercise rights under personal data protection law, you can contact us at:",
            subsections: [
                {
                    id: "contact-address",
                    title: "",
                    content: "Thailand Institute of Scientific and Technological Research (TISTR)\n35 Technothani, Moo 3, Khlong Ha Sub-district, Khlong Luang District, Pathum Thani Province 12120\nCall Center: 02-577-9300"
                },
                {
                    id: "contact-dpo",
                    title: "Data Protection Officer",
                    content: "Email: DPO@tistr.or.th\nTISTR Website: www.tistr.or.th"
                }
            ]
        }
    ]
};

export const microbialCenterPolicyEN: PolicyData = {
    title: "Microbial Culture Collection Center Service Policy and Terms",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "Thailand Institute of Scientific and Technological Research (TISTR) through TISTR Culture Collection has the mission to conduct research, development, and management in microbiology for the conservation and sustainable utilization of microbial resources.\n\nTherefore, to ensure that the operations of the Culture Collection Center are rigorous, efficient, and follow the same practices, creating confidence for service users, Thailand Institute of Scientific and Technological Research (TISTR) has issued the Microbial Culture Collection Center Service Policy and Terms as follows:"
        },
        {
            id: "deposit-types",
            title: "1. Deposit Services of TISTR Culture Collection Center",
            content: "Comprising:",
            subsections: [
                {
                    id: "microorganisms",
                    title: "1.1 Microorganisms",
                    content: ""
                },
                {
                    id: "biomaterials",
                    title: "1.2 Biomaterials",
                    content: ""
                }
            ]
        },
        {
            id: "deposit-options",
            title: "2. Types of Deposits",
            content: "Depositors can choose to deposit microorganisms and/or biomaterials according to various deposit types by following the criteria and conditions for deposit storage as follows:",
            subsections: [
                {
                    id: "public-deposit",
                    title: "2.1 Public deposit",
                    content: ""
                },
                {
                    id: "conditional-public-deposit",
                    title: "2.2 Conditional public deposit",
                    content: ""
                },
                {
                    id: "safe-deposit",
                    title: "2.3 Safe deposit",
                    content: ""
                },
                {
                    id: "patent-deposit",
                    title: "2.4 Patent deposit",
                    content: ""
                }
            ]
        },
        {
            id: "procedures",
            title: "3. Methods and Procedures for Deposit Storage",
            content: "The methods and procedures for depositing microorganisms and/or biomaterials shall be in accordance with the regulations, procedures, and guidelines established by TISTR Culture Collection Center."
        },
        {
            id: "source-requirements",
            title: "4. Source Requirements",
            content: "TISTR Culture Collection Center will accept deposits only in cases where microorganisms and/or biomaterials can identify their country of origin. That is, TISTR Culture Collection Center and depositors must comply with laws and regulations related to microorganisms and/or biomaterials of Thailand and must be aware of the Convention on Biological Diversity, the Nagoya Protocol, and other related protocols."
        },
        {
            id: "disclaimers",
            title: "5. Rights Reservations",
            content: "",
            subsections: [
                {
                    id: "compliance-disclaimer",
                    title: "",
                    content: "5.1 TISTR Culture Collection Center is not responsible for damages or disputes arising from cases where depositors do not comply with the specified requirements, laws and/or various regulations."
                },
                {
                    id: "dispute-disclaimer",
                    title: "",
                    content: "5.2 In case external parties dispute or claim ownership rights in microorganisms or biomaterials alleging rights infringement against external parties, depositors must take all actions to quickly resolve such disputes or claims."
                },
                {
                    id: "force-majeure-disclaimer",
                    title: "",
                    content: "5.3 TISTR Culture Collection Center is not responsible for damage, loss, deterioration, mutation, or death of microorganisms and/or biomaterials due to causes beyond the control of TISTR Culture Collection Center or from natural disasters, fires, floods, riots, wars, protests, theft, including other force majeure events."
                },
                {
                    id: "refund-disclaimer",
                    title: "",
                    content: "5.4 Reserves the right not to refund service fees in all cases."
                },
                {
                    id: "termination-rights",
                    title: "",
                    content: "5.5 TISTR Culture Collection Center has the right to cancel services or cancel agreements and service terms immediately without prior notice to service users if it appears that service users violate any terms of this agreement or if there are grounds for TISTR to cancel services or cancel agreements and service terms according to law."
                }
            ]
        },
        {
            id: "deposit-conditions",
            title: "6. Conditions for Depositing Microorganisms and/or Biomaterials",
            content: "",
            subsections: [
                {
                    id: "public-deposit-conditions",
                    title: "6.1 Public deposit",
                    content: "",
                    items: [
                        "6.1.1 Accept deposits of microorganisms and/or biomaterials, bacteria, yeast and fungi with risk levels that cause disease or danger in Risk Group 1 or 2 only",
                        "6.1.2 Accept deposits only in cases that can be preserved by freezing or lyophilization methods",
                        "6.1.3 Microorganisms and/or biomaterials will be managed according to TISTR Culture Collection Center methods and preserved using appropriate methods depending on the type of microorganism",
                        "6.1.4 Depositors consider sharing commercial benefits and/or transferring ownership rights in microorganisms with TISTR Culture Collection Center depending on depositor requirements, requiring documentation or contracts between TISTR Culture Collection Center and depositors",
                        "6.1.5 Depositors authorize TISTR Culture Collection Center to use strains and/or biomaterials for research and/or public service at prices determined by the Culture Collection Center",
                        "6.1.6 TISTR Culture Collection Center will provide services to depositors under the Material Transfer Agreement for TISTR microbial strains",
                        "6.1.7 Depositors pay no service fees"
                    ]
                },
                {
                    id: "conditional-deposit-conditions",
                    title: "6.2 Conditional public deposit for research publication",
                    content: "",
                    items: [
                        "6.2.1 Accept deposits of microorganisms (bacteria, yeast, and fungi) and/or biomaterials with risk levels that cause disease or danger in Risk Group 1 or 2 only",
                        "6.2.2 Accept deposits by preservation through freezing or lyophilization methods only",
                        "6.2.3 Microorganisms and/or biomaterials will be managed according to TISTR Culture Collection Center methods and preserved using appropriate methods depending on the type of microorganism",
                        "6.2.4 Microorganisms and/or biomaterials will be kept confidentially until documents are published from the date specified by customers for a period not exceeding 2 years without service fees"
                    ]
                },
                {
                    id: "safe-deposit-conditions",
                    title: "6.3 Safe deposit",
                    content: "",
                    items: [
                        "6.3.1 Accept deposits of microorganisms (bacteria, yeast, and fungi) and/or biomaterials with risk levels that cause disease or danger in Risk Group 1 or 2 only",
                        "6.3.2 Accept deposits by preservation through freezing or lyophilization methods only",
                        "6.3.3 Microorganisms and/or biomaterials will be managed according to TISTR Culture Collection Center methods and preserved using appropriate methods depending on the type of microorganism",
                        "6.3.4 Microorganisms and/or biomaterials and data of microorganisms and/or biomaterials will be kept confidentially",
                        "6.3.5 Depositors pay service fees as determined by TISTR Culture Collection Center",
                        "6.3.6 TISTR Culture Collection Center considers verifying the accuracy of microorganisms and/or biomaterials and viability of microorganisms. If verification shows that deposited microorganisms are not viable, depositors must submit new microorganism sets as replacements"
                    ]
                },
                {
                    id: "patent-deposit-conditions",
                    title: "6.4 Patent/Petty patent deposit",
                    content: "",
                    items: [
                        "6.4.1 Accept deposits of microorganisms specifically bacteria, yeast, and fungi and/or biomaterials with risk levels that cause disease or danger in Risk Group 1 or 2 only",
                        "6.4.2 Accept deposits by preservation through freezing or lyophilization methods only",
                        "6.4.3 Microorganisms and/or biomaterials will be managed according to TISTR Culture Collection Center methods and preserved using appropriate methods depending on the type of microorganism",
                        "6.4.4 Microorganisms and/or biomaterials and data of microorganisms and/or biomaterials will be kept confidentially",
                        "6.4.5 Depositors must submit printed patent/petty patent application documents or copies to TISTR Culture Collection Center",
                        "6.4.6 Depositors pay service fees as determined by TISTR Culture Collection Center",
                        "6.4.7 TISTR Culture Collection Center considers verifying the accuracy of microorganisms and/or biomaterials and viability of microorganisms. If verification shows that deposited microorganisms are not viable, depositors must submit new microorganism sets as replacements",
                        "6.4.8 TISTR Culture Collection Center issues certificates of microorganism and/or biomaterial deposit for depositors to use in patent/petty patent applications with the Department of Intellectual Property, Ministry of Commerce",
                        "6.4.9 If patent/petty patent registration is obtained, depositors must pay service fees according to the patent or petty patent protection period. If patent/petty patent registration is not obtained, depositors may request to change deposit storage to safe deposit or other cases as agreed with TISTR Culture Collection Center"
                    ]
                }
            ]
        }
    ]
};

export const serviceAgreementPolicyEN: PolicyData = {
    title: "Service Agreement for Microbial Strain and/or Biomaterial Deposit Storage",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "This service agreement applies between Thailand Institute of Scientific and Technological Research (TISTR) through TISTR Culture Collection and service users, where service users agree to be bound by and comply with the following terms and conditions:\n\nWhereas Genetic Resources (MATERIAL) means microbial strains/mutant microorganisms, genetic materials, derivatives, plasmids, or others. Genetic Resources (MATERIAL) covers both living and non-living materials that can identify their country of origin. Users of genetic resources must comply with the following conditions:"
        },
        {
            id: "specific-conditions",
            title: "1. Specific Conditions",
            content: "",
            subsections: [
                {
                    id: "material-requirements",
                    title: "",
                    content: "1.1 Genetic resources that can be used with this service must be microorganisms (bacteria, yeast, and fungi) and/or biomaterials with risk levels that cause disease or danger in Risk Group 1 or 2 only"
                },
                {
                    id: "storage-method",
                    title: "",
                    content: "1.2 This service involves deposit storage using freezing or lyophilization methods only"
                },
                {
                    id: "handling-procedure",
                    title: "",
                    content: "1.3 Microorganisms and/or biomaterials will be managed according to TISTR Culture Collection Center methods and preserved using appropriate methods depending on the type of microorganism"
                }
            ]
        },
        {
            id: "general-conditions",
            title: "2. General Conditions",
            content: "",
            subsections: [
                {
                    id: "compliance-liability",
                    title: "",
                    content: "2.1 TISTR Culture Collection Center is not responsible for damages or disputes arising from cases where depositors do not comply with specified requirements, laws and/or various regulations"
                },
                {
                    id: "dispute-resolution",
                    title: "",
                    content: "2.2 In case external parties dispute or claim ownership rights in microorganisms and/or biomaterials alleging rights infringement against external parties, depositors must take all actions to quickly resolve such disputes or claims"
                },
                {
                    id: "force-majeure",
                    title: "",
                    content: "2.3 TISTR Culture Collection Center is not responsible for damage, loss, deterioration, mutation, or death of microorganisms and/or biomaterials due to causes beyond the control of TISTR Culture Collection Center or from natural disasters, fires, floods, riots, wars, protests, theft, including other force majeure events"
                },
                {
                    id: "no-refund",
                    title: "",
                    content: "2.4 Reserves the right not to refund service fees in all cases"
                },
                {
                    id: "service-termination",
                    title: "",
                    content: "2.5 TISTR Culture Collection Center has the right to cancel services or cancel agreements and service terms immediately without prior notice to service users if it appears that service users violate any terms of this agreement or if there are grounds for TISTR to cancel services or cancel agreements and service terms according to law"
                },
                {
                    id: "legal-compliance",
                    title: "",
                    content: "2.6 Service users must comply with laws regarding genetic resources and obligations that Thailand has joined as parties existing currently and in the future, and must comply with policies and conditions for microbial culture collection center services, regulations, rules, and TISTR guidelines existing currently and in the future. If TISTR finds that service users do not comply with such conditions, TISTR reserves the right to suspend or cancel services"
                },
                {
                    id: "termination-rights",
                    title: "",
                    content: "2.7 TISTR has the right to cancel services or cancel agreements and service terms immediately without prior notice to service users if it appears that service users violate any terms of this agreement or if there are grounds for TISTR to cancel services or cancel agreements and service terms according to law"
                },
                {
                    id: "termination-terms",
                    title: "",
                    content: "2.8 In case of service cancellation or cancellation of agreements and service terms, regardless of circumstances, service users agree not to claim any damages (if any) and service fees already paid from TISTR"
                }
            ]
        }
    ]
};

export default { privacyPolicyTH, privacyPolicyEN, microbialCenterPolicyTH, microbialCenterPolicyEN, serviceAgreementPolicyTH, serviceAgreementPolicyEN };
