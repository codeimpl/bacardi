/*
 * Copyright (c) 2017 The Lunch Class Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "examples/calculator.h"

double Calculator::Add(double number1, double number2) {
  return number1 + number2;
}

double Calculator::Sub(double number1, double number2) {
  return number1 - number2;
}

double Calculator::Mul(double number1, double number2) {
  return number1 * number2;
}

double Calculator::Div(double number1, double number2) {
  return (number2 != 0) ? (number1 / number2) : 0;
}
