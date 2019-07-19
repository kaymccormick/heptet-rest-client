export interface EntityPojo {
    name?: string;
    tableName?: string;
    columns?: EntityColumnPojo[];
}
export interface EntityColumnPojo {
    propertyName?: string;
    type?: string;
    isPrimary?: boolean;
    isNullable?: boolean;
    isGenerated?: boolean;
    comment?: string;
    isArray?: boolean ;
    propertyPath?: string;
    isObjectId?: boolean;
}
