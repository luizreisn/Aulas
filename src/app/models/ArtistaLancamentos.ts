import { Area, LifeSpan } from "./ArtistaBusca";

export interface ArtistaLancamentos {
    gender:           string;
    disambiguation:   string;
    type:             string;
    "release-groups": ReleaseGroup[];
    area:             Area;
    "life-span":      LifeSpan;
    "begin-area":     Area;
    name:             string;
    begin_area:       Area;
    "end-area":       null;
    end_area:         null;
    "type-id":        string;
    id:               string;
    "sort-name":      string;
    isnis:            any[];
    "gender-id":      string;
    country:          string;
    ipis:             any[];
}

export interface ReleaseGroup {
    disambiguation:       string;
    id:                   string;
    "secondary-type-ids": string[];
    "primary-type-id":    string;
    "first-release-date": Date;
    title:                string;
    "secondary-types":    string[];
    "primary-type":       string;
}
