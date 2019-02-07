/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Inject, Injectable, Renderer2 } from '@angular/core';
import { config } from './config';
import { DOCUMENT } from '@angular/common';
import { MaskApplierService } from './mask-applier.service';
export class MaskService extends MaskApplierService {
    /**
     * @param {?} document
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(document, _config, _elementRef, _renderer) {
        super(_config);
        this.document = document;
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.maskExpression = '';
        this.isNumberValue = false;
        this.showMaskTyped = false;
        this.maskIsShown = '';
        // tslint:disable-next-line
        this.onChange = (_) => { };
        this.onTouch = () => { };
        this._formElement = this._elementRef.nativeElement;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyMask(inputValue, maskExpression, position = 0, cb = () => { }) {
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (!inputValue && this.showMaskTyped) {
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        const result = super.applyMask(inputValue, maskExpression, position, cb);
        Array.isArray(this.dropSpecialCharacters)
            ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
            : this.dropSpecialCharacters === true
                ? this.onChange(this.isNumberValue
                    ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                    : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                : this.onChange(this._removeSufix(this._removePrefix(result)));
        /** @type {?} */
        let ifMaskIsShown = '';
        if (!this.showMaskTyped) {
            return result;
        }
        /** @type {?} */
        const resLen = result.length;
        /** @type {?} */
        const prefNmask = this.prefix + this.maskIsShown;
        ifMaskIsShown = prefNmask.slice(resLen);
        return result + ifMaskIsShown;
    }
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyValueChanges(position = 0, cb = () => { }) {
        /** @type {?} */
        const maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        this._formElement.value = maskedInput;
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    }
    /**
     * @return {?}
     */
    showMaskInInput() {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            return this.maskExpression.replace(/\w/g, '_');
        }
        return '';
    }
    /**
     * @return {?}
     */
    clearIfNotMatchFn() {
        if (this.clearIfNotMatch === true &&
            this.maskExpression.length !== this._formElement.value.length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    set formElementProperty([name, value]) {
        this._renderer.setProperty(this._formElement, name, value);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    _removeMask(value, specialCharactersForRemove) {
        return value
            ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
            : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _removePrefix(value) {
        if (!this.prefix) {
            return value;
        }
        return value
            ? value.replace(this.prefix, '')
            : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _removeSufix(value) {
        if (!this.sufix) {
            return value;
        }
        return value
            ? value.replace(this.sufix, '')
            : value;
    }
    /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    _regExpForRemove(specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map((item) => `\\${item}`).join('|'), 'gi');
    }
}
MaskService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MaskService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [config,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    MaskService.prototype.maskExpression;
    /** @type {?} */
    MaskService.prototype.isNumberValue;
    /** @type {?} */
    MaskService.prototype.showMaskTyped;
    /** @type {?} */
    MaskService.prototype.maskIsShown;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype._formElement;
    /** @type {?} */
    MaskService.prototype.onChange;
    /** @type {?} */
    MaskService.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    MaskService.prototype._config;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MaskService.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hc2svIiwic291cmNlcyI6WyJhcHAvbmd4LW1hc2svbWFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQVcsTUFBTSxVQUFVLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzVELE1BQU0sT0FBTyxXQUFZLFNBQVEsa0JBQWtCOzs7Ozs7O0lBU2pELFlBRTRCLFFBQWEsRUFDYixPQUFnQixFQUNsQyxXQUF1QixFQUN2QixTQUFvQjtRQUU1QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFMVyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBYnZCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVcsRUFBRSxDQUFDOztRQUd6QixhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMxQixZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBU3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFTSxTQUFTLENBQ2QsVUFBa0IsRUFDbEIsY0FBc0IsRUFDdEIsV0FBbUIsQ0FBQyxFQUNwQixLQUFlLEdB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Q0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sS0FBSztZQUNWLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQywwQkFBb0M7UUFDM0QsT0FBTyxJQUFJLE1BQU0sQ0FDZiwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ3ZFLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7O1lBcklGLFVBQVU7Ozs7NENBWU4sTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLE1BQU07WUFsQlQsVUFBVTtZQUFzQixTQUFTOzs7O0lBT2hELHFDQUFtQzs7SUFDbkMsb0NBQXNDOztJQUN0QyxvQ0FBc0M7O0lBQ3RDLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQXVDOztJQUV2QywrQkFBaUM7O0lBQ2pDLDhCQUEwQjs7Ozs7SUFHeEIsK0JBQXVDOzs7OztJQUN2Qyw4QkFBMEM7Ozs7O0lBQzFDLGtDQUErQjs7Ozs7SUFDL0IsZ0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbmZpZywgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFza1NlcnZpY2UgZXh0ZW5kcyBNYXNrQXBwbGllclNlcnZpY2Uge1xuICBwdWJsaWMgbWFza0V4cHJlc3Npb246IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgaXNOdW1iZXJWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd01hc2tUeXBlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbWFza0lzU2hvd246IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9mb3JtRWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwdWJsaWMgb25Ub3VjaCA9ICgpID0+IHt9O1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoY29uZmlnKSBwcm90ZWN0ZWQgX2NvbmZpZzogSUNvbmZpZyxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoX2NvbmZpZyk7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlNYXNrKFxuICAgIGlucHV0VmFsdWU6IHN0cmluZyxcbiAgICBtYXNrRXhwcmVzc2lvbjogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBudW1iZXIgPSAwLFxuICAgIGNiOiBGdW5jdGlvbiA9ICgpID0+IHt9XG4gICk6IHN0cmluZyAge1xuXG4gICAgdGhpcy5tYXNrSXNTaG93biA9IHRoaXMuc2hvd01hc2tUeXBlZCA/IHRoaXMuc2hvd01hc2tJbklucHV0KCkgOiAnJztcbiAgICBpZiAoIWlucHV0VmFsdWUgJiYgdGhpcy5zaG93TWFza1R5cGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmVmaXggKyB0aGlzLm1hc2tJc1Nob3duO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZyAgPSBzdXBlci5hcHBseU1hc2soXG4gICAgICBpbnB1dFZhbHVlLFxuICAgICAgbWFza0V4cHJlc3Npb24sXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGNiXG4gICAgKTtcbiAgICBBcnJheS5pc0FycmF5KHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzKVxuICAgICAgPyB0aGlzLm9uQ2hhbmdlKHRoaXMuX3JlbW92ZU1hc2sodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpLCB0aGlzLmRyb3BTcGVjaWFsQ2hhcmFjdGVycykpXG4gICAgICA6IHRoaXMuZHJvcFNwZWNpYWxDaGFyYWN0ZXJzID09PSB0cnVlXG4gICAgICA/IHRoaXMub25DaGFuZ2UoXG4gICAgICAgIHRoaXMuaXNOdW1iZXJWYWx1ZVxuICAgICAgICAgID8gTnVtYmVyKHRoaXMuX3JlbW92ZU1hc2sodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpLCB0aGlzLm1hc2tTcGVjaWFsQ2hhcmFjdGVycykpXG4gICAgICAgICAgOiB0aGlzLl9yZW1vdmVNYXNrKHRoaXMuX3JlbW92ZVN1Zml4KHRoaXMuX3JlbW92ZVByZWZpeChyZXN1bHQpKSwgdGhpcy5tYXNrU3BlY2lhbENoYXJhY3RlcnMpXG4gICAgICApXG4gICAgICA6IHRoaXMub25DaGFuZ2UodGhpcy5fcmVtb3ZlU3VmaXgodGhpcy5fcmVtb3ZlUHJlZml4KHJlc3VsdCkpKTtcbiAgICBsZXQgaWZNYXNrSXNTaG93bjogc3RyaW5nID0gJyc7XG4gICAgaWYgKCF0aGlzLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHJlc0xlbjogbnVtYmVyID0gcmVzdWx0Lmxlbmd0aDtcbiAgICBjb25zdCBwcmVmTm1hc2s6IHN0cmluZyA9IHRoaXMucHJlZml4ICsgdGhpcy5tYXNrSXNTaG93bjtcbiAgICBpZk1hc2tJc1Nob3duID0gcHJlZk5tYXNrLnNsaWNlKHJlc0xlbik7XG4gICAgcmV0dXJuIHJlc3VsdCArIGlmTWFza0lzU2hvd247XG4gIH1cblxuICBwdWJsaWMgYXBwbHlWYWx1ZUNoYW5nZXMoXG4gICAgcG9zaXRpb246IG51bWJlciA9IDAsXG4gICAgY2I6IEZ1bmN0aW9uID0gKCkgPT4ge31cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgbWFza2VkSW5wdXQ6IHN0cmluZyB8IG51bWJlciA9IHRoaXMuYXBwbHlNYXNrKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUsXG4gICAgICB0aGlzLm1hc2tFeHByZXNzaW9uLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBjYlxuICAgICk7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQudmFsdWUgPSBtYXNrZWRJbnB1dDtcbiAgICBpZiAodGhpcy5fZm9ybUVsZW1lbnQgPT09IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFySWZOb3RNYXRjaEZuKCk7XG4gIH1cblxuICBwdWJsaWMgc2hvd01hc2tJbklucHV0KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2hvd01hc2tUeXBlZCAmJiAhIXRoaXMuc2hvd25NYXNrRXhwcmVzc2lvbikge1xuICAgICAgaWYgKHRoaXMubWFza0V4cHJlc3Npb24ubGVuZ3RoICE9PSB0aGlzLnNob3duTWFza0V4cHJlc3Npb24ubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWFzayBleHByZXNzaW9uIG11c3QgbWF0Y2ggbWFzayBwbGFjZWhvbGRlciBsZW5ndGgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3duTWFza0V4cHJlc3Npb247XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dNYXNrVHlwZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1xcdy9nLCAnXycpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJJZk5vdE1hdGNoRm4oKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jbGVhcklmTm90TWF0Y2ggPT09IHRydWUgJiZcbiAgICAgIHRoaXMubWFza0V4cHJlc3Npb24ubGVuZ3RoICE9PSB0aGlzLl9mb3JtRWxlbWVudC52YWx1ZS5sZW5ndGhcbiAgICApIHtcbiAgICAgIHRoaXMuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFsndmFsdWUnLCAnJ107XG4gICAgICB0aGlzLmFwcGx5TWFzayh0aGlzLl9mb3JtRWxlbWVudC52YWx1ZSwgdGhpcy5tYXNrRXhwcmVzc2lvbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldCBmb3JtRWxlbWVudFByb3BlcnR5KFtuYW1lLCB2YWx1ZV06IFtzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW5dKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZm9ybUVsZW1lbnQsIG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU1hc2soXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBzcGVjaWFsQ2hhcmFjdGVyc0ZvclJlbW92ZTogc3RyaW5nW11cbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgID8gdmFsdWUucmVwbGFjZSh0aGlzLl9yZWdFeHBGb3JSZW1vdmUoc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmUpLCAnJylcbiAgICAgIDogdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVQcmVmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnByZWZpeCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgICAgID8gdmFsdWUucmVwbGFjZSh0aGlzLnByZWZpeCwgJycpXG4gICAgICA6IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlU3VmaXgodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnN1Zml4KSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICAgICAgPyB2YWx1ZS5yZXBsYWNlKHRoaXMuc3VmaXgsICcnKVxuICAgICAgOiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ0V4cEZvclJlbW92ZShzcGVjaWFsQ2hhcmFjdGVyc0ZvclJlbW92ZTogc3RyaW5nW10pOiBSZWdFeHAge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgc3BlY2lhbENoYXJhY3RlcnNGb3JSZW1vdmUubWFwKChpdGVtOiBzdHJpbmcpID0+IGBcXFxcJHtpdGVtfWApLmpvaW4oJ3wnKSxcbiAgICAgICdnaSdcbiAgICApO1xuICB9XG59XG4iXX0=