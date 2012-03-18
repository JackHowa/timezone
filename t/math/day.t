#!/usr/bin/env coffee
require("../proof") 5, ({ tz, utc }) ->
  @equal tz(utc(2007, 2, 3), "-1 day"), utc(2007, 2, 2), "subtract day"
  @equal tz(utc(2007, 3, 1), "-1 day"), utc(2007, 2, 31), "subtract day across month"
  @equal tz(utc(2007, 0, 1), "-1 day"), utc(2006, 11, 31), "subtract day across year"
  @equal tz(utc(2007, 2, 3), "+1 day"), utc(2007, 2, 4), "add day"
  @equal tz(utc(2007, 2, 31), "+366 day"), utc(2008, 2, 31), "add day across month"
