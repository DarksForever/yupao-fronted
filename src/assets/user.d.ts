/**
 * 用户信息
 */
export type userType = {
    id: number;
    username: string;
    userAccount: string;
    //可选的属性。如果 avaterUrl 不存在，则 gender 属性的类型将是 undefined。
    avaterUrl?: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: string;
    userRole: string;
    planetCode: string;
    tags: string[];
    createTime: Date;
}