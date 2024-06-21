export interface Yad2Response {
    housesArray: HousesArray[];
    countOfPages: number;
  }

export interface HousesArray {
    HomeTypeText: string;
    HomeTypeID: number;
    MinFloor: number;
    MaxFloor: number;
    Image: string;
    images: string[];
    MinSqm: number;
    Rooms: number;
    Price: number;
    OrderID: number;
    projectID: number;
    geo_location: Geolocation;
    DisplayAddress: string;
    CityNeighborhood: string;
    Neighborhood: string;
    project_products: string[];
    promotion_text: string;
    projectName: string;
    Info: string;
    Logo: string;
    vPhoneYad2: string;
    project_section: string;
    listing_product_id: number;
  }
  
  interface Geolocation {
    lat: number;
    lon: number;
  }