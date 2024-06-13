import { Component, Input, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { FindYourHouseService } from '../../services/findYourHouse.service';
import { response } from 'express';

@Component({
    selector: 'app-property-list',
    standalone: true,
    templateUrl: './property-list.component.html',
    styleUrl: './property-list.component.scss',
    imports: [PropertyCardComponent]
})
export class PropertyListComponent implements OnInit {

  properties = [];

  constructor(private findYourHouseService: FindYourHouseService) {

  }

  ngOnInit() {
    this.findYourHouseService.saveData().subscribe(response => {
      this.properties = response.message;
      console.log(this.properties)
    })
  }
  // properties = [
  //   {
  //     CityNeighborhood: "ראשון לציון",
  //     DisplayAddress: "שרירא 30-42, ראשון לציון",
  //     HomeTypeID: 6,
  //     HomeTypeText: "גג/ פנטהאוז",
  //     Image: "20210812171445913-b.jpg",
  //     Info: `זו ההזדמנות שלכם ליהנות מכל העולמות ולשלם הרבה פחות. "גני ראשון", הפרויקט המבוקש במזרח ראשל"צ, מציע חווית מגורים מושלמת למשפחות: בניין מגורים בן 7 בתכנון אדריכלי חדשני, מוקף בתנופת פיתוח סביבתי עשירה היוצרת אווירת מגורים מדויקת. בפרויקט דירות 4-5 חד' ודירות פנטהאוז מפנקות - כולן מרווחות ובעלות מפרט עשיר וכוללות חניה פרטית. פרויקט "גני ראשון" ממוקם בצמוד לפארק "גן בעברית" ובקרבת מוסדות חינוך ומוקדי פנאי, כמו תיכון רביבים והקאנטרי השכונתי שנמצאים במרחק 3 דק' הליכה בלבד. אזור התעשייה של ראשל"צ נמצא אף הוא במרחק קצר ומחבר את הדיירים לכביש 4 וצומת בית דגן המרכזיים וכמו כן לתחנת הרכבת "הראשונים". חברת אב-גד מכריזה על מבצע מיוחד בו תינתן הנחה משמעותית של עד 250,000 ₪ לזמן מוגבל. \r\nמעוניינים במידע נוסף? השאירו פרטים וניצור איתכם קשר`,
  //     Logo: "https://pics.yad2.co.il/Pics/2023/01/20230125100903.jpg",
  //     MaxFloor: 7,
  //     MaxSqm: 104,
  //     MinFloor: 7,
  //     MinSqm: 104,
  //     Neighborhood: "רביבים, גני ראשון",
  //     OrderID: 5176,
  //     Price: 0,
  //     Rooms: 4,
  //     geo_location: { lat: 31.96512603759766, lon: 34.82151794433594 },
  //     images: [
  //       "https://pics.yad2.co.il/Pics/2021/08/20210812171445913.jpg",
  //       "https://pics.yad2.co.il/Pics/2021/08/20210812165010566.jpg",
  //       "https://pics.yad2.co.il/Pics/2021/08/20210812165002363.jpg"
  //     ],
  //     listing_product_id: 6,
  //     projectID: 13209,
  //     projectName: "גני ראשון",
  //     project_products: ['25', '23', '22', '21', '20', '18', '15', '14', '10', '6', '3', '1'],
  //     project_section: "sales",
  //     promotion_text: "הפרויקט המבוקש במזרח ראשל\"צ",
  //     vPhoneYad2: "0554354205"
  //   },
  //   {
  //     CityNeighborhood: "ראשון לציון",
  //     DisplayAddress: "שרירא 30-42, ראשון לציון",
  //     HomeTypeID: 6,
  //     HomeTypeText: "גג/ פנטהאוז",
  //     Image: "20210812171445913-b.jpg",
  //     Info: `זו ההזדמנות שלכם ליהנות מכל העולמות ולשלם הרבה פחות. "גני ראשון", הפרויקט המבוקש במזרח ראשל"צ, מציע חווית מגורים מושלמת למשפחות: בניין מגורים בן 7 בתכנון אדריכלי חדשני, מוקף בתנופת פיתוח סביבתי עשירה היוצרת אווירת מגורים מדויקת. בפרויקט דירות 4-5 חד' ודירות פנטהאוז מפנקות - כולן מרווחות ובעלות מפרט עשיר וכוללות חניה פרטית. פרויקט "גני ראשון" ממוקם בצמוד לפארק "גן בעברית" ובקרבת מוסדות חינוך ומוקדי פנאי, כמו תיכון רביבים והקאנטרי השכונתי שנמצאים במרחק 3 דק' הליכה בלבד. אזור התעשייה של ראשל"צ נמצא אף הוא במרחק קצר ומחבר את הדיירים לכביש 4 וצומת בית דגן המרכזיים וכמו כן לתחנת הרכבת "הראשונים". חברת אב-גד מכריזה על מבצע מיוחד בו תינתן הנחה משמעותית של עד 250,000 ₪ לזמן מוגבל. \r\nמעוניינים במידע נוסף? השאירו פרטים וניצור איתכם קשר`,
  //     Logo: "https://pics.yad2.co.il/Pics/2023/01/20230125100903.jpg",
  //     MaxFloor: 7,
  //     MaxSqm: 104,
  //     MinFloor: 7,
  //     MinSqm: 104,
  //     Neighborhood: "רביבים, גני ראשון",
  //     OrderID: 5176,
  //     Price: 0,
  //     Rooms: 4,
  //     geo_location: { lat: 31.96512603759766, lon: 34.82151794433594 },
  //     images: [
  //       "https://pics.yad2.co.il/Pics/2021/08/20210812171445913.jpg",
  //       "https://pics.yad2.co.il/Pics/2021/08/20210812165010566.jpg",
  //       "https://pics.yad2.co.il/Pics/2021/08/20210812165002363.jpg"
  //     ],
  //     listing_product_id: 6,
  //     projectID: 13209,
  //     projectName: "גני ראשון",
  //     project_products: ['25', '23', '22', '21', '20', '18', '15', '14', '10', '6', '3', '1'],
  //     project_section: "sales",
  //     promotion_text: "הפרויקט המבוקש במזרח ראשל\"צ",
  //     vPhoneYad2: "0554354205"
  //   },
  //   // Add more property objects here
  // ];
}
