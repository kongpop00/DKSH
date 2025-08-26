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

export const privacyPolicyEN: PolicyData = {
    title: "Personal Data Protection Policy (Privacy Policy)",
    sections: [
        {
            id: "introduction",
            title: "",
            content: "Thailand Institute of Scientific and Technological Research (\"TISTR\") recognizes the importance of protecting personal data and other information related to you (collectively referred to as \"data\") to ensure that you can trust that TISTR has transparency and responsibility in collecting, using, or disclosing your data in accordance with the Personal Data Protection Act B.E. 2562 (\"Personal Data Protection Law\") as well as other relevant laws. TISTR has therefore established this personal data protection policy to communicate to executives, employees, contractors, and external service providers of the institute to know and implement, to ensure that personal data received by the institute will be used in accordance with the needs and legally correct, as follows:"
        },
        {
            id: "scope",
            title: "1. Scope of Policy Application",
            content: "This policy applies to personal data of individuals who have relationships with TISTR currently and potentially in the future whose personal data is processed by TISTR, officials, contract employees, business units or other forms of units operated by TISTR, and including contractors or external parties who process personal data on behalf of or in the name of TISTR (\"Personal Data Processors\") under various products and services such as website systems, applications, documents or other forms of services controlled and managed by TISTR (collectively referred to as \"Services\")."
        },
        {
            id: "definitions",
            title: "2. Definitions",
            content: "",
            subsections: [
                {
                    id: "personal-data",
                    title: "2.1 Personal Data",
                    content: "means data relating to a person which enables identification of that person, whether directly or indirectly, but does not include data of deceased persons specifically."
                },
                {
                    id: "sensitive-data",
                    title: "2.2 Sensitive Personal Data",
                    content: "means data that is genuinely personal to an individual but is sensitive and may pose risks for unfair discrimination, such as race, ethnicity, political opinions, beliefs in doctrine, religion or philosophy, sexual behavior, criminal history, health data, disability, labor union data, genetic data, biometric data, or any other data that affects the personal data owner in a similar manner as announced by the Personal Data Protection Committee."
                },
                {
                    id: "data-owner",
                    title: "2.3 Personal Data Owner",
                    content: "means the individual who owns that personal data, but not in cases where a person has ownership of data or is the creator or collector of that data themselves. This personal data owner refers only to natural persons and does not include \"legal entities\" established under law, such as companies, associations, foundations, or other organizations."
                },
                {
                    id: "data-controller",
                    title: "2.4 Personal Data Controller",
                    content: "means a person or legal entity who has the authority and duty to make decisions regarding the collection, use, or disclosure of personal data."
                },
                {
                    id: "data-processor",
                    title: "2.5 Personal Data Processor",
                    content: "means a person or legal entity who carries out operations regarding the collection, use, or disclosure of personal data according to instructions or on behalf of the personal data controller. In this regard, such person or legal entity carrying out such operations is not a personal data controller."
                }
            ]
        },
        {
            id: "data-sources",
            title: "3. Sources of Personal Data that TISTR Collects",
            content: "TISTR collects or obtains various types of personal data from the following data sources:",
            subsections: [
                {
                    id: "direct-collection",
                    title: "3.1",
                    content: "Personal data that TISTR collects directly from personal data owners through various service channels, such as application processes, registration, job applications, contract signing, documents, surveys or use of products and services, or other service channels controlled and managed by TISTR, or when personal data owners contact and communicate with TISTR at offices or through other contact channels controlled and managed by TISTR, etc."
                },
                {
                    id: "website-collection",
                    title: "3.2",
                    content: "Data that TISTR collects from personal data owners' use of websites, products or other services according to contracts or missions."
                },
                {
                    id: "third-party-collection",
                    title: "3.3",
                    content: "Personal data that TISTR collects from other sources, where such data sources have the authority and duty, have legitimate reasons under law, or have received consent from personal data owners to disclose data to TISTR, including from necessity to provide services under contracts that may involve exchange of personal data with contracting agencies."
                }
            ]
        },
        {
            id: "processing-purposes",
            title: "4. Purposes of Personal Data Processing",
            content: "TISTR will collect, use or disclose your personal data for the purposes of TISTR's operations, research and education, service provision, contact coordination, information provision, public relations, as well as database creation, opinion surveys in TISTR's business or activities to improve work quality for greater efficiency, under the purposes of TISTR's operations and/or as required by law. TISTR will store and use such data for the period necessary according to the purposes notified to personal data owners, or as required by law only."
        },
        {
            id: "data-disclosure",
            title: "5. Personal Data Disclosure",
            content: "TISTR will not disclose personal data except for disclosure according to the purposes that personal data owners have provided to TISTR, such as compliance with services requested by personal data owners, or compliance with contractual obligations, or as required by law to disclose, including in cases where there are requests to disclose data by exercising legal authority, such as lawsuits or legal proceedings. In any case where TISTR needs to disclose additional personal data or change from the purposes that data owners have provided, TISTR will notify personal data owners before proceeding with that personal data, except in cases where law requires or permits such action."
        },
        {
            id: "data-storage",
            title: "6. Personal Data Storage",
            content: "TISTR will store personal data as follows:",
            subsections: [
                {
                    id: "storage-format",
                    title: "6.1",
                    content: "Store in document form and/or electronic data"
                },
                {
                    id: "storage-location",
                    title: "6.2",
                    content: "Store at locations with restricted access rights / keep on servers"
                },
                {
                    id: "retention-period",
                    title: "6.3",
                    content: "Personal data storage period. The institute will store personal data for the necessary period, or according to the contract period, or as required or permitted by law"
                },
                {
                    id: "data-deletion",
                    title: "6.4",
                    content: "The institute will delete or destroy personal data or make it data that cannot identify individuals when it is no longer necessary or at the end of the personal data storage period above"
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
                    content: "You have the right to withdraw consent at any time during the period that your personal data is stored by TISTR, except when there are legal restrictions that require TISTR to continue storing data or there is still a contract between you and TISTR that benefits you."
                },
                {
                    id: "right-access",
                    title: "7.2 Right to Access Personal Data",
                    content: "You have the right to request access, receive copies, and request disclosure of the sources of personal data that TISTR has collected without your consent, except in cases where TISTR has the right to refuse your request for legal reasons or court orders, or cases where exercising your rights may have impacts that could cause damage to the rights and freedoms of others."
                },
                {
                    id: "right-rectification",
                    title: "7.3 Right to Request Correction of Personal Data",
                    content: "You have the right to request correction of personal data to ensure accuracy, currency, completeness, and to prevent misunderstanding."
                },
                {
                    id: "right-erasure",
                    title: "7.4 Right to Delete or Destroy Personal Data",
                    content: "You have the right to request deletion or destruction of your personal data, or to make your personal data unable to identify the person who owns the data in the following cases:",
                    items: [
                        "Your data is no longer necessary for the purposes of processing",
                        "When you have withdrawn consent and TISTR has no legal authority to continue processing such personal data",
                        "When you have objected to the processing of personal data",
                        "When the processing of your personal data is unlawful"
                    ]
                },
                {
                    id: "right-restriction",
                    title: "7.5 Right to Request Restriction of Personal Data Use",
                    content: "You have the right to request restriction of the use of your personal data in the following cases:",
                    items: [
                        "When under review according to your request to correct personal data for accuracy, completeness, and currency",
                        "Your personal data has been collected, used, or disclosed unlawfully",
                        "When your personal data is no longer necessary to be stored according to the purposes that TISTR notified in collection, but you wish TISTR to continue storing such data for exercising legal rights",
                        "When under review of the request to exercise the right to object to personal data processing"
                    ]
                },
                {
                    id: "right-portability",
                    title: "7.6 Right to Receive, Send, or Transfer Personal Data",
                    content: "You have the right to request your personal data in a format that can be commonly read or used with tools or devices that work automatically from TISTR, including possibly requesting TISTR to send or transfer data in such format to other personal data controllers, but only for personal data that has been collected using consent basis, contract performance basis, or as legally prescribed."
                },
                {
                    id: "right-object",
                    title: "7.7 Right to Object to Personal Data Processing",
                    content: "You have the right to object to the processing of personal data concerning you, except in cases where TISTR has legitimate reasons to refuse the request under law."
                }
            ]
        },
        {
            id: "security",
            title: "8. Personal Data Security",
            content: "TISTR provides appropriate security measures to prevent unauthorized access, use, modification, correction, or disclosure of personal data. In addition, TISTR has established internal guidelines to define rights to access or use personal data of personal data owners to maintain confidentiality and data security, and TISTR will periodically review such measures for appropriateness."
        },
        {
            id: "cookies",
            title: "9. Use of Cookies",
            content: "TISTR collects and uses cookies on websites under TISTR's supervision, such as www.tistr.or.th, or on your devices depending on the services you use, for security operations in TISTR's service provision and to provide you as users with convenience and good experience in using TISTR's services. This information will be used to improve TISTR's website to better meet your needs. You can choose to accept or not accept cookies. If you choose not to accept or delete cookies, the website may not be able to provide services or display properly."
        },
        {
            id: "complaints",
            title: "10. Complaints to Supervisory Authorities",
            content: "In case you find that TISTR does not comply with personal data protection laws, you have the right to complain to the Personal Data Protection Committee or supervisory agencies appointed by the Personal Data Protection Committee or according to law. Before making such complaints, TISTR asks that you please contact TISTR first to give TISTR the opportunity to learn the facts and explain various issues, including managing to resolve your concerns first."
        },
        {
            id: "dpo",
            title: "11. Data Protection Officer",
            content: "TISTR has appointed a Data Protection Officer to monitor, supervise, and provide advice on the collection, use, or disclosure of personal data, including coordination and cooperation with the Office of the Personal Data Protection Committee to comply with the Personal Data Protection Act B.E. 2562."
        },
        {
            id: "policy-updates",
            title: "12. Updates to Personal Data Protection Policy",
            content: "TISTR may update, modify, or change this policy as deemed appropriate without prior notice to personal data owners for appropriateness and efficiency in service provision. Therefore, TISTR recommends that you read the personal data protection policy every time you visit or use services from TISTR or on TISTR's website."
        },
        {
            id: "contact",
            title: "13. Contact for Inquiries or Rights Exercise",
            content: "If you have questions, suggestions, or concerns about TISTR's collection, use, and disclosure of personal data, or about this policy, or if you wish to exercise your rights under personal data protection law, you can contact us at:",
            subsections: [
                {
                    id: "contact-address",
                    title: "",
                    content: "Thailand Institute of Scientific and Technological Research (TISTR)\n35 Technothani, Moo 3, Klong 5, Klong Luang, Pathum Thani 12120\nCall Center: 02-577-9300"
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

export default { privacyPolicyTH, privacyPolicyEN };
