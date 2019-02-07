import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {

    transform(value: Array<any>, field: string): Array<any> {
        const groupedObj = value.reduce((prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            } else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    }

    // customTransform(value: Array<any>, field: string): Array<any> {
    //     const groupedObj = value.reduce((prev, cur) => {
    //         if (!prev[cur[field]]) {
    //             prev[cur[field]] = [cur];
    //         } else {
    //             prev[cur[field]].push(cur);
    //         }
    //         return prev;
    //     }, {});
    //     //return groupedObj;
    //     return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    // }
    customTransform112(array: Array<any>): Array<any> {
        var newArray = [];
        array.forEach(element => {
            element.value.forEach(newElement => {
                newArray.push(newElement);
            });
        });
        return newArray;
    }
}
