export interface ArtistaBusca {
    created: Date;
    count:   number;
    offset:  number;
    artists: Artist[];
}

export interface Artist {
    id:              string;
    type:            string;
    "type-id":       string;
    score:           number;
    "gender-id"?:    string;
    name:            string;
    "sort-name":     string;
    gender?:         string;
    country?:        string;
    area?:           Area;
    "begin-area"?:   Area;
    disambiguation?: string;
    "life-span":     LifeSpan;
    aliases?:        Alias[];
    tags?:           Tag[];
    isnis?:          string[];
    ipis?:           string[];
}

export interface Alias {
    "sort-name":  string;
    "type-id"?:   string;
    name:         string;
    locale:       null;
    type:         null | string;
    primary:      null;
    "begin-date": null;
    "end-date":   null;
}

export interface Area {
    id:          string;
    type:        string;
    "type-id":   string;
    name:        string;
    "sort-name": string;
    "life-span": LifeSpan;
}

export interface LifeSpan {
    begin?: Date;
    end?: string;
    ended:  null;
}

export interface Tag {
    count: number;
    name:  string;
}