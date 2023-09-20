export interface Option {
    value: string;
    label: string;
};

export type FormValues = {
    name: string;
    category: string;
    price: number;
    image: FileList;
    stock: number;
    categories?: Option
};
