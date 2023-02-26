export interface tracking{
    current: number,
    previous:number
}

export interface frame{
    daily: tracking,
    weekly:tracking,
    monthly:tracking
}

export interface itemframes{
    title:string,
    timeframes:frame[]
}