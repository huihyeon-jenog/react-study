import React from "react";
import styles from "./SettingStyle.module.css";

export default function WorkingCondition() {
  return (
    <div className={styles.workingConditionContainer}>
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemType}>근무조건</h2>
        <label className={styles.labelName} htmlFor="workingPlace">
          근무장소
        </label>
        <input
          type="text"
          className={styles.labelInputText}
          id="workingPlace"
          name="workingPlace"
        />
        <label className={styles.labelName} htmlFor="workType">
          근로형태
        </label>
        <select id="workType">
          <option value="일반근로">일반근로</option>
          <option value="일반근로2">일반근로</option>
        </select>
        <label className={styles.labelName} htmlFor="periodProbation">
          수습기간
        </label>
        <select id="periodProbation" name="periodProbation">
          <option value="3개월">3개월</option>
          <option value="6개월">6개월</option>
        </select>
        <label className={styles.labelName} htmlFor="wageCalculationPeriod">
          임금산정기간
        </label>
        <select id="wageCalculationPeriod" name="wageCalculationPeriod1">
          <option value="매월" title="임금산정기간 매월">
            매월
          </option>
        </select>
        <select id="wageCalculationPeriod2" name="wageCalculationPeriod2">
          <option value="1일" title="임금산정기간 매일">
            1일
          </option>
        </select>
        <span>~</span>
        <select id="wageCalculationPeriod3" name="wageCalculationPeriod3">
          <option value="12개월" title="임금산정기간 월">
            12개월
          </option>
        </select>

        <label className={styles.labelName} htmlFor="wagePaymentTime">
          임금지급시기 및 방법
        </label>
        <select id="wagePaymentTime" name="wagePaymentTime1">
          <option value="당월" title="임금지급시기 월">
            당월
          </option>
        </select>
        <select id="wagePaymentTime2" name="wagePaymentTime2">
          <option value="1일" title="임금지급시기 며칠">
            1일
          </option>
        </select>

        <label>
          <input type="radio" name="way" value="계좌이체" />
          계좌이체
        </label>

        <label>
          <input type="radio" name="way" value="직접지금" />
          직접지급
        </label>
      </div>
      <div className={styles.itemWrapper}>
        <h2 className={styles.itemType}>소정근로일/근무시간</h2>
        <label className={styles.labelName} htmlFor="paidWeeklyHoliday">
          유급주휴일
        </label>
        <input
          type="checkbox"
          id="paidWeeklyHolidayMon"
          name="paidWeeklyHolidayMon"
          value="월요일"
        />
        <label htmlFor="paidWeeklyHolidayMon">월</label>
        <input
          type="checkbox"
          id="paidWeeklyHolidayTue"
          name="paidWeeklyHolidayTue"
          value="화요일"
        />
        <label htmlFor="paidWeeklyHolidayTue">화</label>
        <input
          type="checkbox"
          id="paidWeeklyHolidayWed"
          name="paidWeeklyHolidayWed"
          value="수요일"
        />
        <label htmlFor="paidWeeklyHolidayWed">수</label>
        <input
          type="checkbox"
          id="paidWeeklyHolidayThu"
          name="paidWeeklyHolidayThu"
          value="목요일"
        />
        <label htmlFor="paidWeeklyHolidayThu">목</label>
        <input
          type="checkbox"
          id="paidWeeklyHolidayFri"
          name="paidWeeklyHolidayFri"
          value="금요일"
        />
        <label htmlFor="paidWeeklyHolidayFri">금</label>
        <input
          type="checkbox"
          id="paidWeeklyHolidaySat"
          name="paidWeeklyHolidaySat"
          value="토요일"
        />
        <label htmlFor="paidWeeklyHolidaySat">토</label>
        <input
          type="checkbox"
          id="paidWeeklyHolidaySun"
          name="paidWeeklyHolidaySun"
          value="일요일"
        />
        <label htmlFor="paidWeeklyHolidaySun">일</label>

        <label className={styles.labelName} htmlFor="paidHoliday">
          유급휴일
        </label>
        <input
          type="checkbox"
          id="paidHolidayMon"
          name="paidHolidayMon"
          value="월요일"
        />
        <label htmlFor="paidHolidayMon">월</label>
        <input
          type="checkbox"
          id="paidHolidayTue"
          name="paidHolidayTue"
          value="화요일"
        />
        <label htmlFor="paidHolidayTue">화</label>
        <input
          type="checkbox"
          id="paidHolidayWed"
          name="paidHolidayWed"
          value="수요일"
        />
        <label htmlFor="paidHolidayWed">수</label>
        <input
          type="checkbox"
          id="paidHolidayThu"
          name="paidHolidayThu"
          value="목요일"
        />
        <label htmlFor="paidHolidayThu">목</label>
        <input
          type="checkbox"
          id="paidHolidayFri"
          name="paidHolidayFri"
          value="금요일"
        />
        <label htmlFor="paidHolidayFri">금</label>
        <input
          type="checkbox"
          id="paidHolidaySat"
          name="paidHolidaySat"
          value="토요일"
        />
        <label htmlFor="paidHolidaySat">토</label>
        <input
          type="checkbox"
          id="paidHolidaySun"
          name="paidHolidaySun"
          value="일요일"
        />
        <label htmlFor="paidHolidaySun">일</label>

        <label className={styles.labelName} htmlFor="unpaidHolidays">
          무급휴일
        </label>
        <input
          type="checkbox"
          id="unpaidHolidaysMon"
          name="unpaidHolidaysMon"
          value="월요일"
        />
        <label htmlFor="unpaidHolidaysMon">월</label>
        <input
          type="checkbox"
          id="unpaidHolidaysTue"
          name="unpaidHolidaysTue"
          value="화요일"
        />
        <label htmlFor="unpaidHolidaysTue">화</label>
        <input
          type="checkbox"
          id="unpaidHolidaysWed"
          name="unpaidHolidaysWed"
          value="수요일"
        />
        <label htmlFor="unpaidHolidaysWed">수</label>
        <input
          type="checkbox"
          id="unpaidHolidaysThu"
          name="unpaidHolidaysThu"
          value="목요일"
        />
        <label htmlFor="unpaidHolidaysThu">목</label>
        <input
          type="checkbox"
          id="unpaidHolidaysFri"
          name="unpaidHolidaysFri"
          value="금요일"
        />
        <label htmlFor="unpaidHolidaysFri">금</label>
        <input
          type="checkbox"
          id="unpaidHolidaysSat"
          name="unpaidHolidaysSat"
          value="토요일"
        />
        <label htmlFor="unpaidHolidaysSat">토</label>
        <input
          type="checkbox"
          id="unpaidHolidaysSun"
          name="unpaidHolidaysSun"
          value="일요일"
        />
        <label htmlFor="unpaidHolidaysSun">일</label>

        <label className={styles.labelName} htmlFor="fixedWorkingDay">
          소정근로일 [+]
        </label>
        <input
          type="checkbox"
          id="fixedWorkingDayMon"
          name="fixedWorkingDayMon"
          value="월요일"
        />
        <label htmlFor="fixedWorkingDayMon">월</label>
        <input
          type="checkbox"
          id="fixedWorkingDayTue"
          name="fixedWorkingDayTue"
          value="화요일"
        />
        <label htmlFor="fixedWorkingDayTue">화</label>
        <input
          type="checkbox"
          id="fixedWorkingDayWed"
          name="fixedWorkingDayWed"
          value="수요일"
        />
        <label htmlFor="fixedWorkingDayWed">수</label>
        <input
          type="checkbox"
          id="fixedWorkingDayThu"
          name="fixedWorkingDayThu"
          value="목요일"
        />
        <label htmlFor="fixedWorkingDayThu">목</label>
        <input
          type="checkbox"
          id="fixedWorkingDayFri"
          name="fixedWorkingDayFri"
          value="금요일"
        />
        <label htmlFor="fixedWorkingDayFri">금</label>
        <input
          type="checkbox"
          id="fixedWorkingDaySat"
          name="fixedWorkingDaySat"
          value="토요일"
        />
        <label htmlFor="fixedWorkingDaySat">토</label>
        <input
          type="checkbox"
          id="fixedWorkingDaySun"
          name="fixedWorkingDaySun"
          value="일요일"
        />
        <label htmlFor="fixedWorkingDaySun">일</label>

        <label className={styles.labelName}>시,종업시간</label>
        <select name="term">
          <option value="09">09</option>
          <option value="10">10</option>
        </select>
        <span>:</span>
        <select name="term">
          <option value="00">00</option>
          <option value="30">30</option>
        </select>
        <span>~</span>
        <select name="term">
          <option value="18">18</option>
          <option value="20">20</option>
        </select>
        <span>:</span>
        <select name="term">
          <option value="00">00</option>
          <option value="30">30</option>
        </select>

        <label className={styles.labelName}>휴게시간 [+]</label>
        <select name="term">
          <option value="09">09</option>
          <option value="10">10</option>
        </select>
        <span>:</span>
        <select name="term">
          <option value="00">00</option>
          <option value="30">30</option>
        </select>
        <span>~</span>
        <select name="term">
          <option value="18">18</option>
          <option value="20">20</option>
        </select>
        <span>:</span>
        <select name="term">
          <option value="00">00</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
}
